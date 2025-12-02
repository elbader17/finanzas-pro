<script>
    import { transactions, accounts, magicLoading, quota } from "$lib/stores";
    import { fetchAPI } from "$lib/api";
    import { formatDate } from "$lib/utils";
    import Scanner from "$lib/components/Scanner.svelte";
    import CategoryIcon from "$lib/components/CategoryIcon.svelte";
    import { Sparkles, Trash2, Ghost } from "lucide-svelte";

    let magicInput = "";
    let transType = "expense";
    let amount = "";
    let desc = "";
    let account = "";
    let category = "Comida";
    let date = new Date().toISOString().split("T")[0];

    // Initialize account default
    $: if ($accounts.length > 0 && !account) account = $accounts[0].name;

    async function handleMagicEntry() {
        console.log("Magic Entry Clicked. Input:", magicInput);
        if (!magicInput) {
            console.log("Magic Input is empty");
            return;
        }
        magicLoading.set(true);

        try {
            const selectedAccount = account || "Efectivo";
            const system = `Actúa como API. Devuelve JSON Array. Reglas: Detecta INGRESO/GASTO. Extrae: description, amount, type (income/expense), date (YYYY-MM-DD), category (Comida, Transporte, Servicios, Ocio, Salud, Sueldo, Ventas, Hogar, Educación, Otros), account. Hoy es ${new Date().toISOString().split("T")[0]}.`;

            console.log("Sending request to AI...");
            const res = await fetchAPI("/ai/generate", "POST", {
                prompt: magicInput,
                systemInstruction: system,
            });
            console.log("AI Response received:", res);

            const q = await fetchAPI("/ai/quota");
            if (q) quota.set(q);

            const text = res?.candidates?.[0]?.content?.parts?.[0]?.text;
            console.log("Extracted text:", text);

            if (text) {
                let cleanRes = text
                    .replace(/```json/g, "")
                    .replace(/```/g, "")
                    .trim();
                const firstBracket = cleanRes.indexOf("[");
                const lastBracket = cleanRes.lastIndexOf("]");
                if (firstBracket !== -1 && lastBracket !== -1)
                    cleanRes = cleanRes.substring(
                        firstBracket,
                        lastBracket + 1,
                    );

                let data = JSON.parse(cleanRes);
                if (!Array.isArray(data)) data = [data];
                console.log("Parsed data:", data);

                for (const item of data) {
                    const newT = await fetchAPI("/transactions", "POST", {
                        amount: parseFloat(item.amount),
                        description: item.description,
                        type: item.type || "expense",
                        category: item.category || "Otros",
                        account: item.account || selectedAccount,
                        date:
                            item.date || new Date().toISOString().split("T")[0],
                        createdAt: new Date().toISOString(),
                    });
                    if (newT) transactions.update((t) => [newT, ...t]);
                }
                magicInput = "";
            } else {
                console.warn("No text found in AI response");
            }
        } catch (e) {
            alert("No se pudo interpretar.");
            console.error("Magic Entry Error:", e);
        } finally {
            magicLoading.set(false);
        }
    }

    async function addTransaction() {
        if (!amount || !desc) return;
        const newT = await fetchAPI("/transactions", "POST", {
            amount: parseFloat(amount),
            description: desc,
            type: transType,
            account: account,
            category: category,
            date: date,
            createdAt: new Date().toISOString(),
        });
        if (newT) {
            transactions.update((t) => [newT, ...t]);
            amount = "";
            desc = "";
            transType = "expense";
            date = new Date().toISOString().split("T")[0];
        }
    }

    async function deleteTransaction(id) {
        await fetchAPI(`/transactions?id=${id}`, "DELETE");
        transactions.update((t) => t.filter((item) => item.id !== id));
    }

    function setTransType(type) {
        transType = type;
    }
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 fade-in pb-20">
    <div class="lg:col-span-1 space-y-4">
        <Scanner />

        <div
            class="bg-white rounded-2xl shadow-sm border border-indigo-100 p-5 relative overflow-hidden"
        >
            <h2
                class="text-sm font-bold text-indigo-900 mb-2 flex items-center gap-2"
            >
                <Sparkles class="w-4 h-4 text-indigo-700" /> Entrada Mágica
            </h2>
            <textarea
                bind:value={magicInput}
                placeholder="Ej: Almuerzo en McDonald's $15 con tarjeta de débito"
                class="w-full p-3 text-sm bg-indigo-50/30 border border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-700 resize-none h-20 mb-3 transition-all"
            ></textarea>
            <button
                on:click={handleMagicEntry}
                disabled={$magicLoading}
                class="w-full bg-indigo-700 text-white py-2 rounded-lg text-xs font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-800 transition-all disabled:opacity-70"
            >
                {$magicLoading ? "Interpretando..." : "Auto-Completar"}
            </button>
        </div>

        <div
            class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-24"
        >
            <h2
                class="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2"
            >
                Entrada Manual
            </h2>
            <form
                on:submit|preventDefault={addTransaction}
                class="flex flex-col gap-4"
            >
                <div class="flex bg-slate-100 p-1 rounded-xl">
                    <button
                        type="button"
                        on:click={() => setTransType("expense")}
                        class="flex-1 py-2 text-sm font-bold rounded-lg transition-all {transType ===
                        'expense'
                            ? 'bg-white text-red-500 shadow-sm transform scale-105'
                            : 'text-slate-400 hover:bg-slate-200/50'}"
                        >Gasto</button
                    >
                    <button
                        type="button"
                        on:click={() => setTransType("income")}
                        class="flex-1 py-2 text-sm font-bold rounded-lg transition-all {transType ===
                        'income'
                            ? 'bg-white text-emerald-600 shadow-sm transform scale-105'
                            : 'text-slate-400 hover:bg-slate-200/50'}"
                        >Ingreso</button
                    >
                </div>

                <div class="flex flex-col gap-1 w-full">
                    <label
                        class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1"
                        for="t-amount">Monto</label
                    >
                    <input
                        type="number"
                        id="t-amount"
                        bind:value={amount}
                        placeholder="0.00"
                        step="0.01"
                        class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all"
                    />
                </div>

                <div class="flex flex-col gap-1 w-full">
                    <label
                        class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1"
                        for="t-desc">Descripción</label
                    >
                    <input
                        type="text"
                        id="t-desc"
                        bind:value={desc}
                        placeholder="Ej: Supermercado"
                        class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all"
                    />
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col gap-1 w-full">
                        <label
                            class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1"
                            for="t-account">Cuenta</label
                        >
                        <select
                            id="t-account"
                            bind:value={account}
                            class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                        >
                            {#each $accounts as acc}
                                <option value={acc.name}>{acc.name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="flex flex-col gap-1 w-full">
                        <label
                            class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1"
                            for="t-cat">Categoría</label
                        >
                        <select
                            id="t-cat"
                            bind:value={category}
                            class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all"
                        >
                            {#each ["Comida", "Transporte", "Servicios", "Ocio", "Salud", "Sueldo", "Ventas", "Hogar", "Educación", "Otros"] as cat}
                                <option value={cat}>{cat}</option>
                            {/each}
                        </select>
                    </div>
                </div>

                <div class="flex flex-col gap-1 w-full">
                    <label
                        class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1"
                        for="t-date">Fecha</label
                    >
                    <input
                        type="date"
                        id="t-date"
                        bind:value={date}
                        class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all"
                    />
                </div>

                <button
                    type="submit"
                    class="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 shadow-lg transition-all mt-2"
                    >Guardar</button
                >
            </form>
        </div>
    </div>

    <div class="lg:col-span-2">
        <div
            class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-full min-h-[500px]"
        >
            <div
                class="p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center sticky top-0 backdrop-blur-sm z-10"
            >
                <h3
                    class="font-bold text-slate-700 text-sm uppercase tracking-wide"
                >
                    Historial Reciente
                </h3>
                <span
                    class="text-xs bg-white border border-slate-200 px-2 py-1 rounded-md text-slate-500 font-mono"
                    >{$transactions.length}</span
                >
            </div>
            <div
                class="divide-y divide-slate-50 max-h-[800px] overflow-y-auto custom-scrollbar"
            >
                {#if $transactions.length === 0}
                    <div
                        class="p-10 text-center text-slate-400 flex flex-col items-center"
                    >
                        <Ghost class="w-10 h-10 mb-2 opacity-50" />
                        Sin movimientos
                    </div>
                {:else}
                    {#each $transactions as t (t.id)}
                        <div
                            class="p-4 hover:bg-slate-50 flex justify-between items-center group transition-all"
                        >
                            <div class="flex items-center gap-4">
                                <div
                                    class="w-10 h-10 rounded-full flex items-center justify-center {t.type ===
                                    'income'
                                        ? 'bg-emerald-100 text-emerald-600'
                                        : 'bg-red-50 text-red-500'} shrink-0"
                                >
                                    <CategoryIcon category={t.category} />
                                </div>
                                <div class="min-w-0">
                                    <p
                                        class="font-bold text-slate-800 text-sm truncate pr-2"
                                    >
                                        {t.description}
                                    </p>
                                    <p
                                        class="text-xs text-slate-400 flex items-center gap-1"
                                    >
                                        <span>{formatDate(t.date)}</span><span
                                            class="w-1 h-1 rounded-full bg-slate-300"
                                        ></span><span>{t.account}</span>
                                    </p>
                                </div>
                            </div>
                            <div
                                class="text-right flex items-center gap-3 shrink-0"
                            >
                                <span
                                    class="font-bold text-sm {t.type ===
                                    'income'
                                        ? 'text-emerald-600'
                                        : 'text-slate-800'}"
                                    >{t.type === "income"
                                        ? "+"
                                        : "-"}${parseFloat(
                                        t.amount,
                                    ).toLocaleString()}</span
                                >
                                <button
                                    on:click={() => deleteTransaction(t.id)}
                                    class="text-slate-300 hover:text-red-500 p-1.5 hover:bg-red-50 rounded-lg transition-colors"
                                    ><Trash2 class="w-4 h-4" /></button
                                >
                            </div>
                        </div>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
</div>
