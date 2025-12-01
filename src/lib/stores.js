import { writable } from 'svelte/store';

export const user = writable(null); // For auth token/user info
export const transactions = writable([]);
// export const investments = writable([]); // Removed
export const accounts = writable([]);
export const quota = writable({ used: 0, limit: 15, remaining: 15, isUsingOwnKey: false, resetDate: null });
export const settings = writable({ useOwnKey: false, hasKey: false });
export const activeTab = writable('dashboard');
export const aiReportText = writable(null);
export const scannedImage = writable(null);
export const scannedTransactions = writable([]);
export const magicLoading = writable(false);
export const aiLoading = writable(false);
