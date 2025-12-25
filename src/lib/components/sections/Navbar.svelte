<script>
    import { language, isSearchOpen, theme } from '$lib/stores';
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
    
    // Fungsi baru untuk toggle Dark Mode
    const toggleTheme = () => {
        theme.update(t => t === 'dark' ? 'light' : 'dark');
    };

    const openSearch = () => {
        isMobileMenuOpen = false;
        isSearchOpen.set(true);
    };
</script>

<svelte:window on:scroll={handleScroll} />

<nav class={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-slate-200/50 dark:border-white/10 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
    <div class="container mx-auto flex items-center justify-between px-6 lg:px-12">
        <div class="flex items-center gap-4">
            <a href="/" class="relative z-50 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Awan<span class="text-sky-500">.</span>
            </a>
            
            <!-- Status Indicator (Premium Dark Mode Support) -->
            <div class="hidden lg:flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-3 py-1 backdrop-blur-sm">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Available for Work</span>
            </div>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6">
            {#each navLinks as link}
                <button 
                    on:click={() => handleNavClick(link.id)}
                    class="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors hover:text-sky-600 dark:hover:text-white"
                >
                    {link.name}
                </button>
            {/each}

            <div class="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-white/10">
                <!-- Search Button -->
                <button 
                    on:click={openSearch} 
                    class="group flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
                    aria-label="Search"
                >
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>

                <!-- Theme Toggle Button (New) -->
                <button 
                    on:click={toggleTheme} 
                    class="group flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-white/10 hover:text-yellow-500 dark:hover:text-yellow-300"
                    aria-label="Toggle Theme"
                >
                    {#if $theme === 'dark'}
                        <i class="fa-solid fa-sun"></i>
                    {:else}
                        <i class="fa-solid fa-moon"></i>
                    {/if}
                </button>

                <!-- Language Button -->
                <button 
                    on:click={toggleLang} 
                    class="text-xs font-bold uppercase w-6 tracking-wide text-slate-900 dark:text-white transition-colors hover:text-sky-600"
                >
                    {$language}
                </button>
            </div>
            
            <!-- Resume Button -->
            <a 
                href="/resume.pdf" 
                target="_blank"
                class="rounded-full bg-slate-900 dark:bg-white px-5 py-2.5 text-xs font-bold text-white dark:text-black transition-all hover:bg-slate-800 dark:hover:bg-slate-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
                Resume <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i>
            </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
            class="relative z-50 md:hidden p-2 text-slate-900 dark:text-white focus:outline-none" 
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

    <!-- Mobile Menu Overlay -->
    <div class={`fixed inset-0 z-40 bg-white dark:bg-[#0a0a0a] transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div class="flex h-full flex-col justify-center px-8 space-y-8">
            {#each navLinks as link}
                <button 
                    on:click={() => handleNavClick(link.id)}
                    class="text-left text-2xl font-bold text-slate-900 dark:text-white hover:text-sky-600"
                >
                    {link.name}
                </button>
            {/each}

            <div class="h-px w-full bg-slate-100 dark:bg-white/10"></div>

            <div class="flex items-center justify-between gap-6">
                <div class="flex gap-4">
                    <button on:click={openSearch} class="flex items-center gap-2 text-lg font-medium text-slate-600 dark:text-slate-400">
                        <i class="fa-solid fa-magnifying-glass"></i> Cari
                    </button>
                    <button on:click={toggleTheme} class="flex items-center gap-2 text-lg font-medium text-slate-600 dark:text-slate-400">
                        {#if $theme === 'dark'}
                            <i class="fa-solid fa-sun text-yellow-400"></i> Light
                        {:else}
                            <i class="fa-solid fa-moon text-slate-600"></i> Dark
                        {/if}
                    </button>
                </div>
                <button on:click={toggleLang} class="text-lg font-bold uppercase text-slate-900 dark:text-white">
                    {$language}
                </button>
            </div>

             <a href="/resume.pdf" class="inline-flex w-full justify-center rounded-xl bg-slate-900 dark:bg-white py-4 text-center font-bold text-white dark:text-black">
                Download Resume
             </a>
        </div>
    </div>
</nav>