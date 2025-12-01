<script>
    import '../app.css';
    import { onMount } from 'svelte';
    import { user } from '$lib/stores';
    import Auth from '$lib/components/Auth.svelte';
    import Header from '$lib/components/Header.svelte';
    import MobileNav from '$lib/components/MobileNav.svelte';

    let mounted = false;

    onMount(() => {
        const token = localStorage.getItem('token');
        if (token) {
            user.set({ token });
        }
        mounted = true;
    });
</script>

{#if mounted}
    {#if $user}
        <Header />
        <main class="max-w-6xl mx-auto px-4 py-6 min-h-screen">
            <slot />
        </main>
        <MobileNav />
    {:else}
        <Auth />
    {/if}
{/if}
