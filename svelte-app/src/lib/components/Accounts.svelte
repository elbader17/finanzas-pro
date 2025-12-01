<script>
    import { accounts } from '$lib/stores';
    import { fetchAPI } from '$lib/api';
    import { Landmark, Trash2 } from 'lucide-svelte';

    let newAccName = '';

    async function addAccount() {
        if (!newAccName.trim()) return;
        const newAcc = await fetchAPI('/accounts', 'POST', { name: newAccName, type: 'custom' });
        if(newAcc) {
            accounts.update(a => [...a, newAcc]);
            newAccName = '';
        }
    }

    async function deleteAccount(id) {
        if (!confirm('¿Eliminar cuenta?')) return;
        await fetchAPI(`/accounts?id=${id}`, 'DELETE');
        accounts.update(a => a.filter(item => item.id !== id));
    }
</script>

<div class="max-w-3xl mx-auto space-y-6 fade-in pb-20">
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h2 class="text-lg font-bold text-slate-800 mb-4">Agregar Cuenta</h2>
        <form on:submit|preventDefault={addAccount} class="flex gap-3">
            <input type="text" bind:value={newAccName} placeholder="Ej: Billetera Crypto" class="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 transition-all">
            <button type="submit" class="bg-indigo-700 text-white px-6 py-2 rounded-xl font-medium hover:bg-indigo-800 shadow-lg shadow-indigo-200 transition-all">Crear</button>
        </form>
    </div>
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div class="p-5 border-b border-slate-100 bg-slate-50/50"><h3 class="font-bold text-slate-700 text-sm uppercase tracking-wide">Mis Cuentas</h3></div>
        <div class="divide-y divide-slate-100">
            {#each $accounts as acc (acc.id)}
                <div class="p-5 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                    <div class="flex items-center gap-4">
                        <div class="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-700"><Landmark class="w-5 h-5" /></div>
                        <span class="font-medium text-slate-800">{acc.name}</span>
                    </div>
                    <div class="flex gap-1">
                        <button on:click={() => deleteAccount(acc.id)} class="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 class="w-4 h-4" /></button>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
