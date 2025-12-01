<script>
    import { scannedImage, scannedTransactions, accounts, quota } from '$lib/stores';
    import { fetchAPI } from '$lib/api';
    import { ScanLine, Camera, X, Check } from 'lucide-svelte';
    import QuotaBadge from '$lib/components/QuotaBadge.svelte';

    let selectedAccount = $accounts[0]?.name || 'Efectivo';
    let processing = false;

    async function handleImageUpload(e) {
        const file = e.target.files[0];
        if (!file) return;

        if (file.type === 'application/pdf') {
            const fileReader = new FileReader();
            fileReader.onload = async function() {
                try {
                    const pdfjsLib = await import('pdfjs-dist');
                    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

                    const typedarray = new Uint8Array(this.result);
                    const pdf = await pdfjsLib.getDocument(typedarray).promise;
                    const page = await pdf.getPage(1);
                    const viewport = page.getViewport({ scale: 1.5 });
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    await page.render({ canvasContext: context, viewport: viewport }).promise;
                    scannedImage.set(canvas.toDataURL('image/jpeg', 0.8));
                } catch (err) {
                    console.error(err);
                    alert("Error al procesar el PDF.");
                }
            };
            fileReader.readAsArrayBuffer(file);
        } else {
            const reader = new FileReader();
            reader.onload = (e) => scannedImage.set(e.target.result);
            reader.readAsDataURL(file);
        }
    }

    function clearImage() {
        scannedImage.set(null);
        scannedTransactions.set([]);
    }

    async function analyzeImage() {
        if (!$scannedImage) return;
        processing = true;
        
        try {
            const system = `Extract receipt data to JSON Array: [{description, amount (number), type (usually expense), date (YYYY-MM-DD), category}].`;
            const res = await fetchAPI('/ai/generate', 'POST', { 
                prompt: "Extract items.", 
                systemInstruction: system, 
                imageBase64: $scannedImage.split(',')[1] 
            });
            
            const q = await fetchAPI('/ai/quota');
            if(q) quota.set(q);

            const text = res?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (text) {
                let cleanRes = text.replace(/```json/g, '').replace(/```/g, '').trim();
                const firstBracket = cleanRes.indexOf('[');
                const lastBracket = cleanRes.lastIndexOf(']');
                if (firstBracket !== -1 && lastBracket !== -1) cleanRes = cleanRes.substring(firstBracket, lastBracket + 1);

                let data = JSON.parse(cleanRes);
                if (!Array.isArray(data)) data = [data];

                scannedTransactions.set(data.map(item => ({
                    description: item.description || 'Gasto Escaneado',
                    amount: parseFloat(item.amount) || 0,
                    type: item.type || 'expense',
                    date: item.date || new Date().toISOString().split('T')[0],
                    category: item.category || 'Otros',
                })).filter(item => item.amount > 0));
            }
        } catch (e) {
            alert('Error leyendo imagen');
            console.error(e);
        } finally {
            processing = false;
        }
    }

    async function importScanned(idx) {
        const item = $scannedTransactions[idx];
        const newT = await fetchAPI('/transactions', 'POST', {
            amount: parseFloat(item.amount), 
            description: item.description, 
            type: item.type || 'expense',
            category: item.category || 'Otros', 
            account: selectedAccount,
            date: item.date || new Date().toISOString().split('T')[0],
            createdAt: new Date().toISOString()
        });
        
        if (newT) {
            // Update transactions store? 
            // The store is writable, we should update it.
            // But usually we refetch or update locally.
            // Let's update locally to be fast.
            // We need to import transactions store.
            // Wait, I didn't import transactions store here.
            // I'll emit an event or just import it.
            // I'll import it.
            const { transactions } = await import('$lib/stores');
            transactions.update(t => [newT, ...t]);
            
            scannedTransactions.update(t => {
                const copy = [...t];
                copy.splice(idx, 1);
                return copy;
            });
            
            if ($scannedTransactions.length === 0) {
                scannedImage.set(null);
            }
        }
    }

    async function importAllScanned() {
        const { transactions } = await import('$lib/stores');
        for (const item of $scannedTransactions) {
            const newT = await fetchAPI('/transactions', 'POST', {
                amount: parseFloat(item.amount), 
                description: item.description, 
                type: item.type || 'expense',
                category: item.category || 'Otros', 
                account: selectedAccount,
                date: item.date || new Date().toISOString().split('T')[0],
                createdAt: new Date().toISOString()
            });
            if(newT) transactions.update(t => [newT, ...t]);
        }
        scannedImage.set(null);
        scannedTransactions.set([]);
    }
</script>

<div class="bg-white rounded-2xl shadow-sm border border-emerald-100 p-5 relative overflow-hidden group">
    <div class="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
    <div class="flex justify-between items-start relative z-10 mb-3">
        <h2 class="text-sm font-bold text-emerald-900 flex items-center gap-2"><ScanLine class="w-4 h-4" /> Escáner AI</h2>
        <QuotaBadge />
    </div>
    <div class="mb-3 relative z-10">
        <select bind:value={selectedAccount} class="w-full p-2 text-sm bg-emerald-50/50 border border-emerald-100 rounded-lg text-emerald-800">
            {#each $accounts as acc}
                <option value={acc.name}>{acc.name}</option>
            {/each}
        </select>
    </div>

    <div class="{$scannedImage ? 'hidden' : ''} border-2 border-dashed border-emerald-200 rounded-xl p-6 text-center hover:bg-emerald-50/30 transition-colors relative cursor-pointer bg-white">
        <input type="file" accept="image/*,application/pdf" on:change={handleImageUpload} class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20">
        <div class="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-emerald-600"><Camera class="w-5 h-5" /></div>
        <p class="text-xs text-emerald-700 font-medium">Foto o PDF de Recibo</p>
    </div>

    <div class="{$scannedImage ? '' : 'hidden'} space-y-3 relative z-10">
        <div class="relative rounded-lg overflow-hidden border border-emerald-100 h-32 bg-slate-50">
            <img src={$scannedImage} alt="Preview" class="w-full h-full object-contain">
            <button on:click={clearImage} class="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-red-500 backdrop-blur-sm"><X class="w-3 h-3" /></button>
        </div>
        <button on:click={analyzeImage} disabled={processing} class="w-full bg-emerald-600 text-white py-2 rounded-lg text-xs font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all disabled:opacity-70">
            {processing ? 'Procesando...' : 'Procesar Imagen'}
        </button>

        {#if $scannedTransactions.length > 0}
            <div class="flex gap-2">
                <button on:click={importAllScanned} class="flex-1 bg-emerald-50 text-emerald-700 py-2 rounded-lg text-xs font-bold border border-emerald-200 hover:bg-emerald-100">Guardar Todo</button>
            </div>
            <div class="max-h-40 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {#each $scannedTransactions as item, idx}
                    <div class="bg-slate-50 p-2 rounded border border-slate-200 text-xs flex justify-between items-center">
                        <div class="truncate mr-2 font-medium text-slate-700">{item.description}</div>
                        <div class="flex gap-2 items-center">
                            <span class="font-bold text-slate-900">${item.amount}</span>
                            <button on:click={() => importScanned(idx)} class="p-1 bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200"><Check class="w-3 h-3" /></button>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>
