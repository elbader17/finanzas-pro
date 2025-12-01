<script>
    import { activeTab, user } from '$lib/stores';
    import { BrainCircuit, Settings, LogOut } from 'lucide-svelte';

    function setTab(tab) {
        activeTab.set(tab);
    }

    function logout() {
        user.set(null);
        if (typeof localStorage !== 'undefined') localStorage.removeItem('token');
        location.reload();
    }
</script>

<header class="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-20 pt-[env(safe-area-inset-top)]">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center gap-3">
            <div class="bg-gradient-to-br from-indigo-700 to-slate-900 p-2 rounded-xl text-white shadow-lg shadow-indigo-300">
                <BrainCircuit class="w-6 h-6" />
            </div>
            <div>
                <h1 class="text-xl font-bold text-slate-900 leading-tight tracking-tight">Deep<span class="text-indigo-700">View</span></h1>
                <div class="flex items-center gap-2">
                    <p class="text-[10px] font-medium text-emerald-600 uppercase tracking-wider">🟢 Online</p>
                </div>
            </div>
        </div>
        <div class="flex items-center gap-2">
            <div class="hidden md:flex gap-1 bg-slate-100 p-1 rounded-lg mr-2">
                {#each ['dashboard', 'transactions', 'investments', 'accounts'] as tab}
                    <button 
                        on:click={() => setTab(tab)} 
                        class="px-4 py-2 rounded-md text-sm font-medium transition-all {$activeTab === tab ? 'bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}"
                    >
                        {tab === 'dashboard' ? 'Resumen' : tab === 'investments' ? 'Gastos Compartidos' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                {/each}
                <button 
                    on:click={() => setTab('settings')} 
                    class="px-4 py-2 rounded-md text-sm font-medium transition-all {$activeTab === 'settings' ? 'bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}"
                >
                    <Settings class="w-4 h-4" />
                </button>
            </div>
            <button on:click={logout} class="p-2 text-slate-400 hover:text-red-500 bg-slate-50 rounded-lg hover:bg-red-50 transition-colors">
                <LogOut class="w-5 h-5" />
            </button>
        </div>
    </div>
</header>
