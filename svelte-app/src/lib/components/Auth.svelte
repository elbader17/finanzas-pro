<script>
    import { user } from '$lib/stores';
    import { API_URL } from '$lib/api';
    import { BrainCircuit } from 'lucide-svelte';

    let email = '';
    let password = '';
    let isRegistering = false;
    let loading = false;
    let error = '';

    async function handleAuth() {
        loading = true;
        error = '';
        const endpoint = isRegistering ? '/register' : '/login';
        
        try {
            const res = await fetch(`${API_URL}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || 'Error de autenticación');

            if (isRegistering) {
                alert("Cuenta creada. Por favor inicia sesión.");
                toggleMode();
            } else {
                user.set({ token: data.idToken });
                localStorage.setItem('token', data.idToken);
                location.reload(); 
            }
        } catch (e) {
            error = e.message;
        } finally {
            loading = false;
        }
    }

    function toggleMode() {
        isRegistering = !isRegistering;
        error = '';
    }
</script>

<div class="fixed inset-0 z-50 bg-slate-50 flex flex-col items-center justify-center p-6">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8 fade-in">
        <div class="flex flex-col items-center mb-8">
            <div class="bg-gradient-to-br from-indigo-700 to-slate-900 p-3 rounded-2xl text-white shadow-lg shadow-indigo-300 mb-4">
                <BrainCircuit class="w-8 h-8" />
            </div>
            <h1 class="text-2xl font-bold text-slate-900">Deep<span class="text-indigo-700">View</span></h1>
            <p class="text-slate-400 text-sm mt-2">Inteligencia para tu dinero</p>
        </div>

        <form on:submit|preventDefault={handleAuth} class="space-y-4">
            <div class="space-y-1">
                <label class="text-xs font-bold text-slate-500 uppercase ml-1" for="auth-email">Email</label>
                <input type="email" id="auth-email" bind:value={email} required class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
            </div>
            <div class="space-y-1">
                <label class="text-xs font-bold text-slate-500 uppercase ml-1" for="auth-password">Contraseña</label>
                <input type="password" id="auth-password" bind:value={password} required class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
            </div>
            {#if error}
                <div class="p-3 bg-red-50 text-red-600 text-xs rounded-lg font-medium text-center">{error}</div>
            {/if}

            <button type="submit" disabled={loading} class="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold hover:bg-slate-700 shadow-lg shadow-slate-300 transition-all mt-2 disabled:opacity-70">
                {#if loading}
                    <div class="loader border-white border-t-transparent mx-auto"></div>
                {:else}
                    {isRegistering ? "Crear Cuenta" : "Iniciar Sesión"}
                {/if}
            </button>
        </form>

        <div class="mt-6 text-center">
            <p class="text-sm text-slate-500">
                {isRegistering ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
                <button on:click={toggleMode} class="text-indigo-700 font-bold hover:underline ml-1">
                    {isRegistering ? "Inicia Sesión" : "Regístrate"}
                </button>
            </p>
        </div>
    </div>
</div>
