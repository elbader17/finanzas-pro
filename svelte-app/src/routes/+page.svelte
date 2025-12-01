<script>
    import { activeTab, transactions, investments, accounts, quota, settings } from '$lib/stores';
    import { fetchAPI } from '$lib/api';
    import { onMount } from 'svelte';
    import Dashboard from '$lib/components/Dashboard.svelte';
    import Transactions from '$lib/components/Transactions.svelte';
    import Investments from '$lib/components/Investments.svelte';
    import Accounts from '$lib/components/Accounts.svelte';
    import Settings from '$lib/components/Settings.svelte';

    onMount(async () => {
        try {
            const [trans, invs, accs, q, s] = await Promise.all([
                fetchAPI('/transactions'),
                fetchAPI('/investments'),
                fetchAPI('/accounts'),
                fetchAPI('/ai/quota'),
                fetchAPI('/settings')
            ]);

            if (trans) transactions.set(trans);
            if (invs) investments.set(invs);
            if (accs) accounts.set(accs);
            if (q) quota.set(q);
            if (s) settings.set(s);
        } catch (e) {
            console.error("Init Error", e);
        }
    });
</script>

{#if $activeTab === 'dashboard'}
    <Dashboard />
{:else if $activeTab === 'transactions'}
    <Transactions />
{:else if $activeTab === 'investments'}
    <Investments />
{:else if $activeTab === 'accounts'}
    <Accounts />
{:else if $activeTab === 'settings'}
    <Settings />
{/if}
