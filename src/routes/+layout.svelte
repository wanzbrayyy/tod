<script>
	import '../app.css';
	import Navbar from '$lib/components/sections/Navbar.svelte';
</script>

<div class="flex min-h-screen flex-col bg-slate-50 text-slate-800 font-sans">
	<Navbar />
	<main class="flex-grow pt-16">
		<slot />
	</main>
</div>