export function getStats(transactions, accounts) {
    let totalIncome = 0, totalExpense = 0;
    const accountBalances = {};
    const expenseByCategory = {};

    accounts.forEach(a => accountBalances[a.name] = 0);

    transactions.forEach(t => {
        const amt = parseFloat(t.amount);
        if (accountBalances[t.account] === undefined) accountBalances[t.account] = 0;
        if (t.type === 'income') {
            totalIncome += amt;
            accountBalances[t.account] += amt;
        } else {
            totalExpense += amt;
            accountBalances[t.account] -= amt;
            if (!expenseByCategory[t.category]) expenseByCategory[t.category] = 0;
            expenseByCategory[t.category] += amt;
        }
    });

    return {
        totalIncome,
        totalExpense,
        balance: totalIncome - totalExpense,
        totalNetWorth: (totalIncome - totalExpense),
        accounts: accountBalances,
        expenseByCategory
    };
}

export function formatDate(dateStr) {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-');
    return `${d}/${m}`;
}

export function getIconForCategory(cat) {
    const map = { 'Comida': 'utensils', 'Transporte': 'car', 'Servicios': 'zap', 'Ocio': 'beer', 'Salud': 'heart', 'Sueldo': 'banknote', 'Ventas': 'shopping-bag', 'Hogar': 'home', 'Educación': 'graduation-cap' };
    return map[cat] || 'circle-dollar-sign';
}
