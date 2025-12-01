<script>
    import { quota } from '$lib/stores';
    import { Zap, BatteryCharging } from 'lucide-svelte';
</script>

{#if $quota.isUsingOwnKey}
    <span class="inline-flex items-center gap-1 bg-gradient-to-r from-amber-200 to-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-yellow-500/20 shadow-sm">
        <Zap class="w-3 h-3 fill-yellow-900" /> PRO
    </span>
{:else}
    <span class="inline-flex items-center gap-1 {$quota.remaining > 5 ? 'bg-emerald-100 text-emerald-700' : ($quota.remaining > 0 ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700')} text-[10px] font-bold px-2 py-0.5 rounded-full border border-current opacity-80">
        <BatteryCharging class="w-3 h-3" /> {$quota.remaining}/{$quota.limit}
    </span>
{/if}
