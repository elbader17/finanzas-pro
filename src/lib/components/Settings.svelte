<script>
    import { settings, quota } from '$lib/stores';
    import { fetchAPI } from '$lib/api';
    import { Zap, Crown, Key, CheckCircle, Lock } from 'lucide-svelte';

    let useOwnKey = $settings.useOwnKey;
    let apiKey = '';

    // Update local state when store changes
    $: useOwnKey = $settings.useOwnKey;

    async function saveSettings() {
        const body = { useOwnKey };
        if (apiKey && !apiKey.startsWith('•••')) {
            body.geminiApiKey = apiKey;
        }

        try {
            await fetchAPI('/settings', 'POST', body);
            // Fetch Quota again because switching keys changes the limit logic
            const q = await fetchAPI('/ai/quota');
            if(q) quota.set(q);
            const s = await fetchAPI('/settings');
            if(s) settings.set(s);
            alert("Configuración guardada.");
            apiKey = ''; // Clear input for security
        } catch (e) {
            alert("Error al guardar.");
        }
    }
</script>

<div class="max-w-xl mx-auto space-y-6 fade-in pb-20">
    <h2 class="text-2xl font-bold text-slate-800">Configuración</h2>
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 class="font-bold text-slate-800 mb-4 flex items-center gap-2"><Zap class="w-5 h-5 text-yellow-500" /> Uso de IA</h3>
        {#if $quota.isUsingOwnKey}
            <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-center gap-3">
                <div class="bg-yellow-100 p-2 rounded-full text-yellow-600"><Crown class="w-6 h-6" /></div>
                <div>
                    <p class="font-bold text-yellow-800">Modo Pro Activo</p>
                    <p class="text-xs text-yellow-700">Usando tu propia API Key. Sin límites.</p>
                </div>
            </div>
        {:else}
            <div>
                <div class="flex justify-between text-sm mb-1">
                    <span class="text-slate-500">Créditos Semanales</span>
                    <span class="font-bold text-indigo-700">{$quota.remaining} / {$quota.limit}</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-2.5 mb-2 overflow-hidden">
                    <div class="bg-indigo-700 h-2.5 rounded-full transition-all duration-500" style="width: {($quota.used / $quota.limit) * 100}%"></div>
                </div>
                <p class="text-xs text-slate-400">Se renueva el: {$quota.resetDate ? new Date($quota.resetDate).toLocaleDateString() + ' ' + new Date($quota.resetDate).toLocaleTimeString() : 'N/A'}</p>
            </div>
        {/if}
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 class="font-bold text-slate-800 mb-4 flex items-center gap-2"><Key class="w-5 h-5 text-indigo-700" /> Gemini API Key</h3>
        <p class="text-sm text-slate-500 mb-6">Usa tu propia API Key de Google Gemini para eliminar los límites semanales.</p>

        <form on:submit|preventDefault={saveSettings} class="space-y-4">
            <div class="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span class="text-sm font-medium text-slate-700">Usar mi propia Key</span>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" bind:checked={useOwnKey} class="sr-only peer">
                    <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-700"></div>
                </label>
            </div>

            <div class="{useOwnKey ? '' : 'opacity-50'} transition-opacity">
                <div class="relative">
                    <input type="password" bind:value={apiKey} placeholder={$settings.hasKey ? '••••••••••••••••' : 'Pega tu API Key aquí'} class="w-full p-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all pr-10">
                    <div class="absolute right-3 top-3 text-slate-400">
                        {#if $settings.hasKey}
                            <CheckCircle class="w-5 h-5 text-emerald-500" />
                        {:else}
                            <Lock class="w-5 h-5" />
                        {/if}
                    </div>
                </div>
                <p class="text-[10px] text-slate-400 mt-1 ml-1">La Key se cifra de forma segura. <a href="https://aistudio.google.com/app/apikey" target="_blank" class="text-indigo-700 hover:underline">Consigue una aquí</a></p>
            </div>

            <button type="submit" class="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 shadow-lg transition-all mt-2">Guardar Cambios</button>
        </form>
    </div>
</div>
