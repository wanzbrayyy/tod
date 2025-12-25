<script>
	import '../app.css';
    import { onMount } from 'svelte';
    import { theme } from '$lib/stores'; // Import store theme
	import Navbar from '$lib/components/sections/Navbar.svelte';
    import Toast from '$lib/components/ui/Toast.svelte';
    import SpotifyWidget from '$lib/components/ui/SpotifyWidget.svelte';
    import SearchModal from '$lib/components/ui/SearchModal.svelte';
    import CookieBanner from '$lib/components/ui/CookieBanner.svelte';
    import ScrollProgress from '$lib/components/ui/ScrollProgress.svelte';

    onMount(() => {
        console.log("%c Crafted by Awan Berlian ", "background: #0f172a; color: #fff; padding: 8px; border-radius: 4px; font-weight: bold;");
        
        // Pastikan class terpasang saat reload halaman
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            theme.set('dark');
        } else {
            document.documentElement.classList.remove('dark');
            theme.set('light');
        }
    });
</script>

<ScrollProgress />

<!-- Perbaikan Background Global Disini -->
<div class="relative flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-[#0a0a0a] dark:text-slate-100 font-sans selection:bg-sky-200 selection:text-sky-900 transition-colors duration-300">
	<Navbar />
    
	<main class="flex-grow">
		<slot />
	</main>

    <Toast />
    <SpotifyWidget />
    <SearchModal />
    <CookieBanner />
</div>