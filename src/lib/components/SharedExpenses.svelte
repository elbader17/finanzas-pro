<script>
    import {
        Users,
        Plus,
        Trash2,
        DollarSign,
        ArrowRight,
        Wallet,
    } from "lucide-svelte";

    let participants = [];
    let expenses = [];
    let newParticipant = "";

    let description = "";
    let amount = "";
    let payer = "";
    let beneficiaries = []; // IDs of participants

    // Add Participant
    function addParticipant() {
        if (!newParticipant.trim()) return;
        const id = crypto.randomUUID();
        participants = [...participants, { id, name: newParticipant.trim() }];
        newParticipant = "";
        // Add to beneficiaries by default
        beneficiaries = [...beneficiaries, id];
    }

    function removeParticipant(id) {
        participants = participants.filter((p) => p.id !== id);
        expenses = expenses.filter((e) => e.payer !== id); // Remove expenses paid by them? Or keep? Let's keep for now but might break logic. Better to warn.
        // For simplicity, just filter out.
        beneficiaries = beneficiaries.filter((b) => b !== id);
    }

    // Add Expense
    function addExpense() {
        if (!description || !amount || !payer || beneficiaries.length === 0)
            return;

        expenses = [
            ...expenses,
            {
                id: crypto.randomUUID(),
                description,
                amount: parseFloat(amount),
                payer,
                beneficiaries: [...beneficiaries],
                date: new Date().toISOString(),
            },
        ];

        // Reset form
        description = "";
        amount = "";
        // Keep payer? Maybe.
        // Keep beneficiaries? Maybe.
    }

    function removeExpense(id) {
        expenses = expenses.filter((e) => e.id !== id);
    }

    function toggleBeneficiary(id) {
        if (beneficiaries.includes(id)) {
            beneficiaries = beneficiaries.filter((b) => b !== id);
        } else {
            beneficiaries = [...beneficiaries, id];
        }
    }

    // Calculations
    $: balances = (() => {
        const bals = {};
        participants.forEach((p) => (bals[p.id] = 0));

        expenses.forEach((e) => {
            const paidBy = e.payer;
            const amount = e.amount;
            const splitCount = e.beneficiaries.length;
            if (splitCount === 0) return;

            const share = amount / splitCount;

            // Payer gets +amount (they paid)
            if (bals[paidBy] !== undefined) bals[paidBy] += amount;

            // Beneficiaries get -share (they owe)
            e.beneficiaries.forEach((bId) => {
                if (bals[bId] !== undefined) bals[bId] -= share;
            });
        });
        return bals;
    })();

    $: settlementPlan = (() => {
        let debtors = [];
        let creditors = [];

        participants.forEach((p) => {
            const bal = balances[p.id];
            if (bal < -0.01) debtors.push({ id: p.id, amount: bal }); // Negative balance means they owe
            if (bal > 0.01) creditors.push({ id: p.id, amount: bal }); // Positive balance means they are owed
        });

        debtors.sort((a, b) => a.amount - b.amount); // Ascending (most negative first)
        creditors.sort((a, b) => b.amount - a.amount); // Descending (most positive first)

        const plan = [];
        let i = 0; // debtor index
        let j = 0; // creditor index

        while (i < debtors.length && j < creditors.length) {
            const debtor = debtors[i];
            const creditor = creditors[j];

            const amount = Math.min(Math.abs(debtor.amount), creditor.amount);

            plan.push({
                from: participants.find((p) => p.id === debtor.id)?.name,
                to: participants.find((p) => p.id === creditor.id)?.name,
                amount,
            });

            debtor.amount += amount;
            creditor.amount -= amount;

            if (Math.abs(debtor.amount) < 0.01) i++;
            if (creditor.amount < 0.01) j++;
        }
        return plan;
    })();

    $: totalSpent = expenses.reduce((acc, e) => acc + e.amount, 0);
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 fade-in pb-20">
    <!-- Left Column: Controls -->
    <div class="lg:col-span-1 space-y-6">
        <!-- Participants -->
        <div
            class="bg-white rounded-2xl shadow-sm border border-violet-100 p-6"
        >
            <h2
                class="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2"
            >
                <Users class="text-violet-600 w-4 h-4" /> Participantes
            </h2>

            <form
                on:submit|preventDefault={addParticipant}
                class="flex gap-2 mb-4"
            >
                <input
                    type="text"
                    bind:value={newParticipant}
                    placeholder="Nombre..."
                    class="flex-1 p-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm"
                />
                <button
                    type="submit"
                    class="bg-violet-600 text-white p-2 rounded-xl hover:bg-violet-700 transition-colors"
                    ><Plus class="w-5 h-5" /></button
                >
            </form>

            <div class="flex flex-wrap gap-2">
                {#each participants as p (p.id)}
                    <div
                        class="bg-slate-50 border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600 flex items-center gap-2 group"
                    >
                        {p.name}
                        <button
                            on:click={() => removeParticipant(p.id)}
                            class="text-slate-400 hover:text-red-500"
                            ><Trash2 class="w-3 h-3" /></button
                        >
                    </div>
                {/each}
                {#if participants.length === 0}
                    <p class="text-xs text-slate-400 italic">
                        Agrega personas para comenzar
                    </p>
                {/if}
            </div>
        </div>

        <!-- Add Expense -->
        <div
            class="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 sticky top-24"
        >
            <h2
                class="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2"
            >
                <Wallet class="text-violet-600 w-4 h-4" /> Nuevo Gasto
            </h2>

            <form
                on:submit|preventDefault={addExpense}
                class="flex flex-col gap-4"
            >
                <div class="flex flex-col gap-1">
                    <label
                        class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1"
                        for="desc">Descripción</label
                    >
                    <input
                        type="text"
                        id="desc"
                        bind:value={description}
                        class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm"
                    />
                </div>

                <div class="flex flex-col gap-1">
                    <label
                        class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1"
                        for="amount">Monto</label
                    >
                    <input
                        type="number"
                        id="amount"
                        bind:value={amount}
                        step="0.01"
                        class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm"
                    />
                </div>

                <div class="flex flex-col gap-1">
                    <label
                        class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1"
                        for="payer">Pagó</label
                    >
                    <select
                        id="payer"
                        bind:value={payer}
                        class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm"
                    >
                        <option value="" disabled selected
                            >Seleccionar...</option
                        >
                        {#each participants as p}
                            <option value={p.id}>{p.name}</option>
                        {/each}
                    </select>
                </div>

                <div class="flex flex-col gap-1">
                    <label
                        class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1"
                        >Para quién</label
                    >
                    <div
                        class="flex flex-wrap gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200"
                    >
                        {#each participants as p}
                            <button
                                type="button"
                                on:click={() => toggleBeneficiary(p.id)}
                                class="px-2 py-1 rounded-lg text-xs font-medium transition-all border {beneficiaries.includes(
                                    p.id,
                                )
                                    ? 'bg-indigo-100 text-indigo-700 border-indigo-200'
                                    : 'bg-white text-slate-500 border-slate-200'}"
                            >
                                {p.name}
                            </button>
                        {/each}
                        {#if participants.length === 0}
                            <span class="text-xs text-slate-400"
                                >Sin participantes</span
                            >
                        {/if}
                    </div>
                </div>

                <button
                    type="submit"
                    class="w-full bg-violet-600 text-white py-3 rounded-xl font-bold hover:bg-violet-700 shadow-lg shadow-violet-200 transition-all mt-2"
                    disabled={participants.length < 1}>Agregar Gasto</button
                >
            </form>
        </div>
    </div>

    <!-- Right Column: List & Results -->
    <div class="lg:col-span-2 space-y-6">
        <!-- Summary Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
                class="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 text-white shadow-lg shadow-indigo-200"
            >
                <p
                    class="text-indigo-100 text-xs font-medium uppercase tracking-wider mb-1"
                >
                    Total Gastado
                </p>
                <h3 class="text-3xl font-bold">${totalSpent.toFixed(2)}</h3>
            </div>
            <div
                class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
            >
                <p
                    class="text-slate-400 text-xs font-medium uppercase tracking-wider mb-3"
                >
                    Saldos
                </p>
                <div class="space-y-2">
                    {#each participants as p}
                        {@const bal = balances[p.id] || 0}
                        <div class="flex justify-between items-center text-sm">
                            <span class="font-medium text-slate-700"
                                >{p.name}</span
                            >
                            <span
                                class="font-bold {bal >= 0
                                    ? 'text-emerald-600'
                                    : 'text-red-500'}"
                            >
                                {bal >= 0 ? "+" : ""}{bal.toFixed(2)}
                            </span>
                        </div>
                    {/each}
                    {#if participants.length === 0}
                        <p class="text-xs text-slate-400 italic">Sin datos</p>
                    {/if}
                </div>
            </div>
        </div>

        <!-- Settlement Plan -->
        {#if settlementPlan.length > 0}
            <div
                class="bg-emerald-50 rounded-2xl p-6 border border-emerald-100"
            >
                <h3
                    class="text-emerald-800 font-bold mb-4 flex items-center gap-2"
                >
                    <DollarSign class="w-5 h-5" /> Plan de Pagos
                </h3>
                <div class="space-y-3">
                    {#each settlementPlan as plan}
                        <div
                            class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-emerald-100/50"
                        >
                            <span class="font-bold text-slate-700"
                                >{plan.from}</span
                            >
                            <div
                                class="flex-1 flex items-center gap-2 text-xs text-slate-400"
                            >
                                <div class="h-px bg-slate-200 flex-1"></div>
                                paga a
                                <div class="h-px bg-slate-200 flex-1"></div>
                            </div>
                            <span class="font-bold text-slate-700"
                                >{plan.to}</span
                            >
                            <span
                                class="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-lg font-bold text-sm"
                                >${plan.amount.toFixed(2)}</span
                            >
                        </div>
                    {/each}
                </div>
            </div>
        {/if}

        <!-- Expenses List -->
        <div
            class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
        >
            <div class="p-4 border-b border-slate-50 bg-slate-50/50">
                <h3 class="font-bold text-slate-700 text-sm">
                    Historial de Gastos
                </h3>
            </div>
            {#if expenses.length === 0}
                <div class="p-12 text-center text-slate-400">
                    <p>No hay gastos registrados</p>
                </div>
            {:else}
                <div class="divide-y divide-slate-50">
                    {#each expenses as e (e.id)}
                        <div
                            class="p-4 flex justify-between items-center hover:bg-slate-50 transition-colors group"
                        >
                            <div class="flex items-center gap-4">
                                <div
                                    class="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs border border-indigo-100"
                                >
                                    {participants
                                        .find((p) => p.id === e.payer)
                                        ?.name.substring(0, 2)
                                        .toUpperCase()}
                                </div>
                                <div>
                                    <p class="font-bold text-slate-800 text-sm">
                                        {e.description}
                                    </p>
                                    <p class="text-xs text-slate-500">
                                        Pagado por <span
                                            class="font-medium text-indigo-600"
                                            >{participants.find(
                                                (p) => p.id === e.payer,
                                            )?.name}</span
                                        >
                                        para {e.beneficiaries.length} personas
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <span class="font-bold text-slate-900"
                                    >${e.amount.toFixed(2)}</span
                                >
                                <button
                                    on:click={() => removeExpense(e.id)}
                                    class="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                                    ><Trash2 class="w-4 h-4" /></button
                                >
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</div>
