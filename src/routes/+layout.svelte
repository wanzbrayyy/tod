<script>
	import '../app.css';
    import { onMount } from 'svelte';
	import Navbar from '$lib/components/sections/Navbar.svelte';
    import Toast from '$lib/components/ui/Toast.svelte';
    import SpotifyWidget from '$lib/components/ui/SpotifyWidget.svelte';
    import SearchModal from '$lib/components/ui/SearchModal.svelte';
    import CookieBanner from '$lib/components/ui/CookieBanner.svelte';

    onMount(() => {
        console.log(
            "%c Halo Developer! 👋 \n%cTertarik dengan kode sumber website ini? \nKontak saya untuk kolaborasi!", 
            "color: #0ea5e9; font-size: 24px; font-weight: bold;", 
            "color: #64748b; font-size: 14px;"
        );
    });
</script>

<div class="relative flex min-h-screen flex-col bg-slate-50 text-slate-900 font-sans selection:bg-sky-200 selection:text-sky-900">
	<Navbar />
    
	<main class="flex-grow">
		<slot />
	</main>

    <!-- Global Fixed Widgets -->
    <Toast />
    <SpotifyWidget />
    <SearchModal />
    <CookieBanner />
</div>