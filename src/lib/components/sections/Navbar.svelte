<script>
    import { language, isSearchOpen } from '$lib/stores';
    import { scrollToSection } from '$lib/utils/scrollSmooth';

    let isScrolled = false;
    let isMobileMenuOpen = false;

    const navLinks = [
        { name: 'Beranda', id: 'home' },
        { name: 'Layanan', id: 'services' },
        { name: 'Proyek', id: 'projects' },
        { name: 'Blog', id: 'blog' },
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

    const toggleLang = () => {
        language.update(l => l === 'id' ? 'en' : 'id');
    };

    const openSearch = () => {
        isMobileMenuOpen = false;
        isSearchOpen.set(true);
    };
</script>

<svelte:window on:scroll={handleScroll} />

<nav class={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
    <div class="container mx-auto flex items-center justify-between px-6 lg:px-12">
        <a href="/" class="relative z-50 text-2xl font-bold tracking-tight text-slate-900">
            Awan<span class="text-sky-500">.</span>
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

            <div class="flex items-center gap-4 pl-4 border-l border-slate-200">
                <button 
                    on:click={openSearch} 
                    class="group flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
                    aria-label="Search"
                >
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

                <button 
                    on:click={toggleLang} 
                    class="text-xs font-bold uppercase tracking-wide text-slate-900 transition-colors hover:text-sky-600"
                >
                    {$language}
                </button>
            </div>
            
            <a 
                href="/resume.pdf" 
                target="_blank"
                class="rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-lg"
            >
                Resume
            </a>
        </div>

        <button 
            class="relative z-50 md:hidden p-2 text-slate-900 focus:outline-none" 
            on:click={toggleMenu}
            aria-label="Toggle Menu"
        >
            <div class="relative w-6 h-5">
                <span class={`absolute left-0 block h-0.5 w-full bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
                <span class={`absolute left-0 top-2 block h-0.5 w-full bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span class={`absolute left-0 block h-0.5 w-full bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
            </div>
        </button>
    </div>

    <div class={`fixed inset-0 z-40 bg-white transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div class="flex h-full flex-col justify-center px-8 space-y-8">
            {#each navLinks as link}
                <button 
                    on:click={() => handleNavClick(link.id)}
                    class="text-left text-2xl font-bold text-slate-900 hover:text-sky-600"
                >
                    {link.name}
                </button>
            {/each}

            <div class="h-px w-full bg-slate-100"></div>

            <div class="flex items-center gap-6">
                <button on:click={openSearch} class="flex items-center gap-2 text-lg font-medium text-slate-600">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    Cari
                </button>
                <button on:click={toggleLang} class="text-lg font-bold uppercase text-slate-900">
                    {$language}
                </button>
            </div>

            <a 
                href="/resume.pdf" 
                class="inline-flex w-full justify-center rounded-xl bg-slate-900 py-4 text-center font-bold text-white"
            >
                Download Resume
            </a>
        </div>
    </div>
</nav>