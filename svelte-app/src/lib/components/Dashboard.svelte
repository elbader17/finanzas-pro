<script>
    import { transactions, investments, accounts, quota, aiReportText, aiLoading } from '$lib/stores';
    import { getStats } from '$lib/utils';
    import { fetchAPI } from '$lib/api';
    import { onMount, onDestroy } from 'svelte';
    import Chart from 'chart.js/auto';
    import { marked } from 'marked';
    import { BrainCircuit, Sparkles, Wallet, Activity, TrendingUp, PiggyBank, X } from 'lucide-svelte';
    import QuotaBadge from '$lib/components/QuotaBadge.svelte';

    let chartCashFlow, chartBalances, chartAccounts, chartExpenses;
    let canvasCashFlow, canvasBalances, canvasAccounts, canvasExpenses;

    $: stats = getStats($transactions, $investments, $accounts);
    $: pl = stats.investmentValue - stats.investmentCost;
    $: savingsRate = stats.totalIncome > 0 ? Math.round(((stats.totalIncome - stats.totalExpense) / stats.totalIncome) * 100) : 0;
    $: reportHtml = $aiReportText ? marked.parse($aiReportText) : '';

    async function generateAIReport() {
        aiLoading.set(true);
        try {
            const financialData = { 
                balance: { income: stats.totalIncome, expenses: stats.totalExpense, net: stats.balance, equity: stats.totalNetWorth }, 
                expenses_by_cat: stats.expenseByCategory 
            };
            const prompt = `Analiza: ${JSON.stringify(financialData)}. Actúa como Asesor Financiero Senior. Genera un reporte en MARKDOWN: 1. **DIAGNÓSTICO** (Una frase contundente). 2. **ANÁLISIS** (Patrones de gasto). 3. **PLAN DE ACCIÓN** (3 pasos numerados para la próxima semana). Tono profesional. RESPONDE SIEMPRE EN ESPAÑOL.`;
            
            const res = await fetchAPI('/ai/generate', 'POST', { prompt });
            const q = await fetchAPI('/ai/quota');
            if(q) quota.set(q);

            if (res && res.candidates?.[0]?.content?.parts?.[0]?.text) {
                aiReportText.set(res.candidates[0].content.parts[0].text);
            }
        } catch (e) {
            console.error(e);
        } finally {
            aiLoading.set(false);
        }
    }

    function clearAIReport() {
        aiReportText.set(null);
    }

    function initCharts() {
        if (chartCashFlow) chartCashFlow.destroy();
        if (chartBalances) chartBalances.destroy();
        if (chartAccounts) chartAccounts.destroy();
        if (chartExpenses) chartExpenses.destroy();

        if (canvasCashFlow) {
            chartCashFlow = new Chart(canvasCashFlow, {
                type: 'bar',
                data: { labels: ['Ingresos', 'Gastos'], datasets: [{ data: [stats.totalIncome, stats.totalExpense], backgroundColor: ['#10b981', '#ef4444'], borderRadius: 8, barThickness: 50 }] },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { grid: { display: false } }, x: { grid: { display: false } } } }
            });
        }

        if (canvasAccounts) {
            const saldoLiquido = stats.balance; 
            const invVal = stats.investmentValue;
            if (saldoLiquido > 0 || invVal > 0) {
                chartAccounts = new Chart(canvasAccounts, {
                    type: 'doughnut',
                    data: { labels: ['Liquidez/Caja', 'Inversiones'], datasets: [{ data: [saldoLiquido > 0 ? saldoLiquido : 0, invVal], backgroundColor: ['#3b82f6', '#8b5cf6'], borderWidth: 0 }] },
                    options: { responsive: true, maintainAspectRatio: false, cutout: '75%', plugins: { legend: { position: 'right', labels: { usePointStyle: true, boxWidth: 8 } } } }
                });
            }
        }

        if (canvasExpenses) {
            const expCats = Object.keys(stats.expenseByCategory);
            const expVals = Object.values(stats.expenseByCategory);
            if(expCats.length > 0) {
                chartExpenses = new Chart(canvasExpenses, {
                    type: 'doughnut',
                    data: { 
                        labels: expCats, 
                        datasets: [{ 
                            data: expVals, 
                            backgroundColor: ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9'], 
                            borderWidth: 0 
                        }] 
                    },
                    options: { responsive: true, maintainAspectRatio: false, cutout: '60%', plugins: { legend: { position: 'right', labels: { usePointStyle: true, boxWidth: 8, font: {size: 10} } } } }
                });
            }
        }

        if (canvasBalances) {
            const activeAccounts = Object.entries(stats.accounts).filter(([name, bal]) => bal !== 0);
            if(activeAccounts.length > 0) {
                chartBalances = new Chart(canvasBalances, {
                    type: 'bar',
                    data: { 
                        labels: activeAccounts.map(a => a[0]), 
                        datasets: [{ 
                            label: 'Saldo',
                            data: activeAccounts.map(a => a[1]), 
                            backgroundColor: activeAccounts.map(a => a[1] >= 0 ? '#3b82f6' : '#ef4444'), 
                            borderRadius: 4,
                        }] 
                    },
                    options: { 
                        indexAxis: 'y', 
                        responsive: true, 
                        maintainAspectRatio: false, 
                        plugins: { legend: { display: false } }, 
                        scales: { x: { grid: { display: false } } } 
                    }
                });
            }
        }
    }

    $: if (stats && typeof window !== 'undefined') {
        setTimeout(initCharts, 0);
    }

    onDestroy(() => {
        if (chartCashFlow) chartCashFlow.destroy();
        if (chartBalances) chartBalances.destroy();
        if (chartAccounts) chartAccounts.destroy();
        if (chartExpenses) chartExpenses.destroy();
    });
</script>

<div class="space-y-6 fade-in pb-10">
    <!-- AI Advisor Card -->
    <div class="bg-gradient-to-r from-slate-800 to-indigo-900 rounded-2xl p-6 text-white shadow-xl shadow-indigo-900/20 relative overflow-hidden">
        <div class="absolute top-0 right-0 p-8 opacity-10"><BrainCircuit class="w-32 h-32" /></div>
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
            <div>
                <h2 class="text-2xl font-bold flex items-center gap-2">Asesor Financiero AI</h2>
                <p class="text-indigo-200 mt-1 text-sm max-w-md">Análisis profundo de tus patrones de gasto y salud financiera.</p>
                <div class="mt-2"><QuotaBadge /></div>
            </div>
            <button on:click={generateAIReport} disabled={$aiLoading} class="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-5 py-2.5 rounded-xl font-medium shadow-lg text-sm transition-all flex items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                {#if $aiLoading}
                    <div class="loader border-white border-t-transparent mr-2"></div> Analizando...
                {:else}
                    <Sparkles class="w-4 h-4 text-yellow-300 group-hover:rotate-12 transition-transform" /> Generar Reporte
                {/if}
            </button>
        </div>
        {#if $aiReportText}
            <div class="mt-6 bg-black/20 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-sm leading-relaxed font-light tracking-wide text-indigo-50 relative fade-in markdown-body ai-report-dark">
                <button on:click={clearAIReport} class="absolute top-3 right-3 text-indigo-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors" title="Cerrar Reporte">
                    <X class="w-4 h-4" />
                </button>
                {@html reportHtml}
            </div>
        {/if}
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <!-- Card 1 -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 relative overflow-hidden group hover:shadow-md transition-all">
            <div class="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-slate-600"><Wallet class="w-16 h-16" /></div>
            <div class="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><Wallet class="w-4 h-4 text-slate-500" /> Patrimonio</div>
            <div class="text-2xl font-bold text-slate-800 tracking-tight">${stats.totalNetWorth.toLocaleString()}</div>
            <div class="text-xs text-slate-400 mt-1 font-medium">Activos Totales</div>
        </div>
        <!-- Card 2 -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 relative overflow-hidden group hover:shadow-md transition-all">
            <div class="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-emerald-600"><Activity class="w-16 h-16" /></div>
            <div class="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><Activity class="w-4 h-4 text-emerald-500" /> Flujo</div>
            <div class="text-2xl font-bold text-slate-800 tracking-tight">${stats.balance.toLocaleString()}</div>
            <div class="text-xs text-slate-400 mt-1 font-medium">Ingresos: ${stats.totalIncome.toLocaleString()}</div>
        </div>
        <!-- Card 3 -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 relative overflow-hidden group hover:shadow-md transition-all">
            <div class="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-violet-600"><TrendingUp class="w-16 h-16" /></div>
            <div class="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><TrendingUp class="w-4 h-4 text-violet-500" /> Inversiones</div>
            <div class="text-2xl font-bold text-slate-800 tracking-tight">${stats.investmentValue.toLocaleString()}</div>
            <div class="text-xs {pl >= 0 ? 'text-emerald-600' : 'text-red-500'} mt-1 font-medium">{pl >= 0 ? '+' : ''}${pl.toLocaleString()} (G/P)</div>
        </div>
        <!-- Card 4 -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 relative overflow-hidden group hover:shadow-md transition-all">
            <div class="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-blue-600"><PiggyBank class="w-16 h-16" /></div>
            <div class="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><PiggyBank class="w-4 h-4 text-blue-500" /> Ahorro</div>
            <div class="text-2xl font-bold text-slate-800 tracking-tight">{savingsRate}%</div>
            <div class="text-xs text-slate-400 mt-1 font-medium">Tasa Mensual</div>
        </div>
    </div>

    <!-- Charts Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-80">
            <h3 class="font-bold text-slate-800 mb-6 text-sm flex items-center gap-2"><div class="w-1 h-4 bg-emerald-500 rounded-full"></div> Flujo de Caja</h3>
            <div class="relative h-60 w-full"><canvas bind:this={canvasCashFlow}></canvas></div>
        </div>
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-80">
            <h3 class="font-bold text-slate-800 mb-6 text-sm flex items-center gap-2"><div class="w-1 h-4 bg-blue-500 rounded-full"></div> Saldos por Cuenta</h3>
            <div class="relative h-60 w-full"><canvas bind:this={canvasBalances}></canvas></div>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-80">
            <h3 class="font-bold text-slate-800 mb-6 text-sm flex items-center gap-2"><div class="w-1 h-4 bg-indigo-700 rounded-full"></div> Activos vs Pasivos (Aprox)</h3>
            <div class="relative h-60 w-full flex justify-center"><canvas bind:this={canvasAccounts}></canvas></div>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-80">
            <h3 class="font-bold text-slate-800 mb-6 text-sm flex items-center gap-2"><div class="w-1 h-4 bg-red-500 rounded-full"></div> Gastos por Categoría</h3>
            <div class="relative h-60 w-full flex justify-center"><canvas bind:this={canvasExpenses}></canvas></div>
        </div>
    </div>
</div>
