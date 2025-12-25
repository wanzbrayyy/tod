import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Cek local storage atau default ke 'light' jika belum ada (agar tidak stuck di dark)
const initialTheme = browser ? (localStorage.getItem('theme') || 'light') : 'light';

export const theme = writable(initialTheme);
export const language = writable('id');
export const isSearchOpen = writable(false);
export const toast = writable({ show: false, message: '', type: 'info' });

if (browser) {
    // Logic utama: Pasang/Lepas class 'dark' di elemen HTML
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