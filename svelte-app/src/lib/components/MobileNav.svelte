<script>
    import { activeTab } from '$lib/stores';
    import { LayoutDashboard, Wallet, TrendingUp, Landmark, Settings } from 'lucide-svelte';

    function setTab(tab) {
        activeTab.set(tab);
    }
</script>

<nav class="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-lg border-t border-slate-200 flex justify-around p-3 pb-[env(safe-area-inset-bottom)] z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
    <button on:click={() => setTab('dashboard')} class="flex flex-col items-center p-2 {$activeTab === 'dashboard' ? 'text-indigo-700 scale-105 transition-transform' : 'text-slate-400'}">
        <LayoutDashboard class="w-6 h-6 mb-1" />
        <span class="text-[10px] font-medium">Resumen</span>
    </button>
    <button on:click={() => setTab('transactions')} class="flex flex-col items-center p-2 {$activeTab === 'transactions' ? 'text-indigo-700 scale-105 transition-transform' : 'text-slate-400'}">
        <Wallet class="w-6 h-6 mb-1" />
        <span class="text-[10px] font-medium">Movs</span>
    </button>
    <button on:click={() => setTab('investments')} class="flex flex-col items-center p-2 {$activeTab === 'investments' ? 'text-indigo-700 scale-105 transition-transform' : 'text-slate-400'}">
        <TrendingUp class="w-6 h-6 mb-1" />
        <span class="text-[10px] font-medium">Inver</span>
    </button>
    <button on:click={() => setTab('accounts')} class="flex flex-col items-center p-2 {$activeTab === 'accounts' ? 'text-indigo-700 scale-105 transition-transform' : 'text-slate-400'}">
        <Landmark class="w-6 h-6 mb-1" />
        <span class="text-[10px] font-medium">Cuentas</span>
    </button>
    <button on:click={() => setTab('settings')} class="flex flex-col items-center p-2 {$activeTab === 'settings' ? 'text-indigo-700 scale-105 transition-transform' : 'text-slate-400'}">
        <Settings class="w-6 h-6 mb-1" />
        <span class="text-[10px] font-medium">Config</span>
    </button>
</nav>
