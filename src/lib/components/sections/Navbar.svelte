<script>
	import { onMount } from 'svelte';
	import { scrollToSection } from '$lib/utils/scrollSmooth';

	let isScrolled = false;
	let isMobileMenuOpen = false;

	const navLinks = [
		{ name: 'Beranda', id: 'home' },
		{ name: 'Tentang', id: 'about' },
		{ name: 'Proyek', id: 'projects' },
		{ name: 'Kontak', id: 'contact' }
	];

	const handleScroll = () => {
		isScrolled = window.scrollY > 20;
	};

	const toggleMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
	};

	const handleNavClick = (id) => {
		isMobileMenuOpen = false;
		scrollToSection(id);
	};
</script>

<svelte:window on:scroll={handleScroll} />

<nav class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
	<div class="container mx-auto flex items-center justify-between px-6 lg:px-12">
		<a href="/" class="text-2xl font-bold tracking-tight text-slate-900">
			Awan<span class="text-sky-500">.</span>Berlian
		</a>

		<div class="hidden md:flex items-center space-x-8">
			{#each navLinks as link}
				<button 
					on:click={() => handleNavClick(link.id)}
					class="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600"
				>
					{link.name}
				</button>
			{/each}
			<a href="/resume.pdf" class="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:bg-slate-800 hover:-translate-y-0.5">
				Resume
			</a>
		</div>

		<button class="block md:hidden text-slate-900 focus:outline-none" on:click={toggleMenu}>
			<svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				{#if isMobileMenuOpen}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
	</div>

	{#if isMobileMenuOpen}
		<div class="absolute top-full left-0 w-full border-t border-slate-100 bg-white shadow-xl md:hidden">
			<div class="flex flex-col p-6 space-y-4">
				{#each navLinks as link}
					<button 
						on:click={() => handleNavClick(link.id)}
						class="text-left text-lg font-medium text-slate-900"
					>
						{link.name}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</nav>