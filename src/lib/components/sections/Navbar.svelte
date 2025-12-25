<script>
	import { onMount } from 'svelte';
    import { language, isSearchOpen } from '$lib/stores';
	import { scrollToSection } from '$lib/utils/scrollSmooth';

	let isScrolled = false;
	let isMobileMenuOpen = false;

	const navLinks = [
		{ name: 'Beranda', id: 'home' },
		{ name: 'Layanan', id: 'services' },
		{ name: 'Proyek', id: 'projects' },
		{ name: 'Kontak', id: 'contact' }
	];

	const handleScroll = () => isScrolled = window.scrollY > 20;
    const toggleMenu = () => isMobileMenuOpen = !isMobileMenuOpen;
    const toggleLang = () => language.update(l => l === 'id' ? 'en' : 'id');
    const openSearch = () => isSearchOpen.set(true);
</script>

<svelte:window on:scroll={handleScroll} />

<nav class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
	<div class="container mx-auto flex items-center justify-between px-6 lg:px-12">
		<a href="/" class="text-2xl font-bold tracking-tight text-slate-900">
			Awan<span class="text-sky-500">.</span>
		</a>

		<div class="hidden md:flex items-center space-x-8">
			{#each navLinks as link}
				<button on:click={() => scrollToSection(link.id)} class="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600">
					{link.name}
				</button>
			{/each}
            
            <div class="flex items-center gap-4 pl-4 border-l border-slate-200">
                <button on:click={openSearch} class="text-slate-400 hover:text-slate-900">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button on:click={toggleLang} class="text-xs font-bold uppercase tracking-wide text-slate-900 hover:text-sky-600 w-6">
                    {$language}
                </button>
            </div>
            
			<a href="/resume.pdf" class="rounded-full bg-slate-900 px-5 py-2 text-xs font-bold text-white transition-transform hover:bg-slate-800 hover:-translate-y-0.5">
				Resume
			</a>
		</div>

		<button class="md:hidden text-slate-900" on:click={toggleMenu}>
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
		</button>
	</div>
</nav>