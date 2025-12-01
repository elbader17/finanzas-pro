<script>
    import {
        activeTab,
        transactions,
        accounts,
        quota,
        settings,
    } from "$lib/stores";
    import { fetchAPI } from "$lib/api";
    import { onMount } from "svelte";
    import Dashboard from "$lib/components/Dashboard.svelte";
    import Transactions from "$lib/components/Transactions.svelte";
    import SharedExpenses from "$lib/components/SharedExpenses.svelte";
    import Accounts from "$lib/components/Accounts.svelte";
    import Settings from "$lib/components/Settings.svelte";

    onMount(async () => {
        try {
            const [trans, accs, q, s] = await Promise.all([
                fetchAPI("/transactions"),
                // fetchAPI('/investments'), // Removed
                fetchAPI("/accounts"),
                fetchAPI("/ai/quota"),
                fetchAPI("/settings"),
            ]);

            if (trans) transactions.set(trans);
            // if (invs) investments.set(invs); // Removed
            if (accs) accounts.set(accs);
            if (q) quota.set(q);
            if (s) settings.set(s);
        } catch (e) {
            console.error("Init Error", e);
        }
    });
</script>

{#if $activeTab === "dashboard"}
    <Dashboard />
{:else if $activeTab === "transactions"}
    <Transactions />
{:else if $activeTab === "investments"}
    <SharedExpenses />
{:else if $activeTab === "accounts"}
    <Accounts />
{:else if $activeTab === "settings"}
    <Settings />
{/if}
