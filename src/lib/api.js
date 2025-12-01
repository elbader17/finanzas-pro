import { user } from './stores';
import { get } from 'svelte/store';

export const API_URL = "https://finanzas-backend-877934393466.us-central1.run.app/api";

export async function fetchAPI(endpoint, method = 'GET', body = null) {
    const token = get(user)?.token || (typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null);
    if (!token) return null;

    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };
        if (body) options.body = JSON.stringify(body);
        const res = await fetch(`${API_URL}${endpoint}`, options);
        if (res.status === 401) {
            user.set(null);
            if (typeof localStorage !== 'undefined') localStorage.removeItem('token');
            return null;
        }
        if (!res.ok) {
            const error = new Error('API Error');
            error.status = res.status;
            error.data = await res.json().catch(() => ({}));
            throw error;
        }
        return await res.json();
    } catch (e) {
        if (e.status === 403) throw e;
        console.error("API Error:", e);
        return null;
    }
}
