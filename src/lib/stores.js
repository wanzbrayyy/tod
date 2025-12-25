import { writable } from 'svelte/store';

export const language = writable('id');
export const isSearchOpen = writable(false);
export const toast = writable({ show: false, message: '', type: 'info' });

export const showToast = (message, type = 'info') => {
	toast.set({ show: true, message, type });
	setTimeout(() => toast.set({ show: false, message: '', type: 'info' }), 3000);
};