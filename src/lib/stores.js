import { writable } from 'svelte/store';
import { browser } from '$app/environment';
const initialTheme = browser ? localStorage.getItem('theme') ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : 'light';

export const theme = writable(initialTheme);
export const language = writable('id');
export const isSearchOpen = writable(false);
export const toast = writable({ show: false, message: '', type: 'info' });

if (browser) {
    theme.subscribe((value) => {
        localStorage.setItem('theme', value);
        if (value === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });
}

export const showToast = (message, type = 'info') => {
	toast.set({ show: true, message, type });
	setTimeout(() => toast.set({ show: false, message: '', type: 'info' }), 3000);
};