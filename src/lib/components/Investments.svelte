<script>
    import { investments, quota } from '$lib/stores';
    import { fetchAPI } from '$lib/api';
    import { Layers, PieChart, Sparkles, Trash2 } from 'lucide-svelte';

    let symbol = 'AAPL';
    let name = 'Apple';
    let qty = 10;
    let price = 150.00;
    let advice = {};

    async function buyInvestment() {
        if (!symbol || !qty) return;
        const sym = symbol.toUpperCase();
        
        const existing = $investments.find(i => i.symbol === sym);
        let payload = {};
        if (existing) {
            const newQty = existing.quantity + qty;
            const newAvg = ((existing.quantity * existing.avgPrice) + (qty * price)) / newQty;
            payload = { id: existing.id, quantity: newQty, avgPrice: newAvg, currentPrice: price };
        } else {
            payload = { symbol: sym, name: name || sym, quantity: qty, avgPrice: price, currentPrice: price, createdAt: new Date().toISOString() };
        }
        
        await fetchAPI('/investments', 'POST', payload);
        const invs = await fetchAPI('/investments');
        investments.set(invs);
    }

    async function editPrice(id) {
        const newPrice = prompt("Actualizar Precio de Mercado:");
        if (newPrice && !isNaN(newPrice)) {
            await fetchAPI('/investments', 'POST', { id, currentPrice: parseFloat(newPrice) });
            const invs = await fetchAPI('/investments');
            investments.set(invs);
        }
    }

    async function deleteInvestment(id) {
        if (!confirm('¿Eliminar posición?')) return;
        await fetchAPI(`/investments?id=${id}`, 'DELETE');
        investments.update(i => i.filter(item => item.id !== id));
    }

    async function getInvestmentAdvice(id, sym, avg, curr) {
        advice[id] = "Analizando mercado...";
        const pl = ((curr - avg) / avg * 100).toFixed(2);
        const prompt = `Actúa como Analista de Wall St. Activo: ${sym}. Compra: $${avg}. Actual: $${curr}. Rendimiento: ${pl}%. Dame 1 frase seria de opinión (Mantener/Vender/Comprar) basada en gestión de riesgo. RESPONDE EN ESPAÑOL.`;
        
        const res = await fetchAPI('/ai/generate', 'POST', { prompt });
        const q = await fetchAPI('/ai/quota');
        if(q) quota.set(q);

        if (res && res.candidates?.[0]?.content?.parts?.[0]?.text) {
            advice[id] = res.candidates[0].content.parts[0].text;
        }
    }
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 fade-in pb-20">
    <div class="lg:col-span-1">
        <div class="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 sticky top-24">
            <h2 class="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2"><Layers class="text-violet-600 w-4 h-4" /> Nueva Posición</h2>
            <form on:submit|preventDefault={buyInvestment} class="flex flex-col gap-4">
                <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col gap-1 w-full">
                        <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1" for="inv-symbol">Símbolo</label>
                        <input type="text" id="inv-symbol" bind:value={symbol} class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all uppercase">
                    </div>
                    <div class="flex flex-col gap-1 w-full">
                        <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1" for="inv-name">Nombre</label>
                        <input type="text" id="inv-name" bind:value={name} class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all">
                    </div>
                </div>
                
                <div class="flex flex-col gap-1 w-full">
                    <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1" for="inv-qty">Cantidad</label>
                    <input type="number" id="inv-qty" bind:value={qty} step="any" class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all">
                </div>
                
                <div class="flex flex-col gap-1 w-full">
                    <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1" for="inv-price">Precio Unit.</label>
                    <input type="number" id="inv-price" bind:value={price} step="0.01" class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all">
                </div>

                <button type="submit" class="w-full bg-violet-600 text-white py-3 rounded-xl font-bold hover:bg-violet-700 shadow-lg shadow-violet-200 transition-all mt-2">Agregar</button>
            </form>
        </div>
    </div>

    <div class="lg:col-span-2 space-y-4">
        {#if $investments.length === 0}
            <div class="bg-white p-16 rounded-2xl text-center text-slate-400 border border-slate-100 border-dashed">
                <PieChart class="w-12 h-12 mb-3 mx-auto opacity-30" />
                <p>Portafolio vacío</p>
            </div>
        {:else}
            {#each $investments as inv (inv.id)}
                {@const totalCost = inv.quantity * inv.avgPrice}
                {@const curVal = inv.quantity * inv.currentPrice}
                {@const pl = curVal - totalCost}
                {@const plPercent = totalCost ? ((pl / totalCost) * 100).toFixed(2) : 0}
                {@const isPos = pl >= 0}
                
                <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 relative hover:shadow-md transition-shadow group">
                    <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center font-bold text-slate-700 border border-slate-100">{inv.symbol.substring(0,3)}</div>
                            <div><h3 class="text-lg font-bold text-slate-800">{inv.symbol}</h3><p class="text-xs text-slate-500">{inv.name}</p></div>
                        </div>
                        <div class="flex items-center gap-6">
                            <div class="text-right hidden sm:block"><p class="text-[10px] font-bold text-slate-400 uppercase">Tenencia</p><p class="font-mono font-medium text-slate-700">{inv.quantity} <span class="text-xs text-slate-400">@ ${inv.avgPrice.toFixed(0)}</span></p></div>
                            <div class="text-right"><p class="text-[10px] font-bold text-slate-400 uppercase">Precio</p><button on:click={() => editPrice(inv.id)} class="font-bold text-slate-900 border-b border-dashed border-slate-300 hover:text-indigo-700 hover:border-indigo-700 transition-colors">${inv.currentPrice.toFixed(2)}</button></div>
                            <div class="text-right w-24"><div class="font-bold text-lg {isPos ? 'text-emerald-600' : 'text-red-500'}">{isPos ? '+' : ''}{plPercent}%</div><p class="text-xs text-slate-400">${pl.toFixed(0)}</p></div>
                        </div>
                    </div>
                    <div class="border-t border-slate-50 pt-3 mt-4 flex justify-between items-center">
                        <button on:click={() => getInvestmentAdvice(inv.id, inv.symbol, inv.avgPrice, inv.currentPrice)} class="text-xs text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 font-medium transition-colors flex items-center gap-1.5"><Sparkles class="w-3 h-3" /> Análisis AI</button>
                        <button on:click={() => deleteInvestment(inv.id)} class="text-slate-300 hover:text-red-500 transition-colors"><Trash2 class="w-4 h-4" /></button>
                    </div>
                    {#if advice[inv.id]}
                        <div class="mt-3 bg-gradient-to-r from-indigo-50 to-violet-50 p-3 rounded-lg text-xs text-indigo-900 border border-indigo-100 leading-relaxed animate-pulse">{advice[inv.id]}</div>
                    {/if}
                </div>
            {/each}
        {/if}
    </div>
</div>
