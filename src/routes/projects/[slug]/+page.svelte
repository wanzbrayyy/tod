<script>
    import { page } from '$app/stores';
    import projectsData from '$lib/data/projects.json';
    import Button from '$lib/components/ui/Button.svelte';
    import Contact from '$lib/components/sections/Contact.svelte';
    import socialData from '$lib/data/social.json';
    import { onMount } from 'svelte';

    $: project = projectsData.find(p => p.slug === $page.params.slug);

    // Dummy data extended for UI demo if content is short
    const techStack = project?.tech || ["SvelteKit", "Tailwind CSS", "Figma", "Vercel"];
    const stats = [
        { label: "Timeline", value: "4 Weeks" },
        { label: "Role", value: "Frontend & UI" },
        { label: "Client", value: "Tech Corp Inc." },
        { label: "Year", value: "2024" }
    ];
</script>

<svelte:head>
    <title>{project ? project.title : 'Project Not Found'} | Awan Berlian</title>
</svelte:head>

{#if project}
    <!-- Hero Header Image (Full Width with Gradient Fade) -->
    <div class="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden mt-16 group">
        <div class="absolute inset-0 bg-slate-900/20 dark:bg-black/50 z-10"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#0a0a0a] to-transparent z-20"></div>
        <img 
            src={project.image} 
            alt={project.title} 
            class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
        
        <div class="absolute bottom-0 left-0 w-full z-30 pb-12 lg:pb-20">
            <div class="container mx-auto px-6 lg:px-12">
                <a href="/#projects" class="inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-sky-500 mb-6 transition-colors">
                    <i class="fa-solid fa-arrow-left-long"></i> Kembali ke Portfolio
                </a>
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                    {project.title}
                </h1>
                <div class="flex flex-wrap gap-3">
                    <span class="px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        {project.category}
                    </span>
                    <span class="px-4 py-1.5 rounded-full border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900/20 text-sm font-bold text-green-700 dark:text-green-400 uppercase tracking-wider">
                        <i class="fa-solid fa-check-circle mr-1"></i> Completed
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- Content Layout (Sticky Sidebar + Rich Text) -->
    <div class="container mx-auto px-6 lg:px-12 py-12 relative z-30 -mt-10">
        <div class="grid lg:grid-cols-12 gap-12">
            
            <!-- Sidebar (Info Card) -->
            <div class="lg:col-span-4 lg:order-2">
                <div class="sticky top-32 space-y-8">
                    <!-- Project Stats Card -->
                    <div class="glass-card rounded-2xl p-8 shadow-2xl shadow-slate-200/50 dark:shadow-black/50">
                        <div class="grid grid-cols-2 gap-y-8 gap-x-4">
                            {#each stats as stat}
                                <div>
                                    <h4 class="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">{stat.label}</h4>
                                    <p class="text-lg font-bold text-slate-900 dark:text-white">{stat.value}</p>
                                </div>
                            {/each}
                        </div>
                        
                        <div class="mt-8 pt-8 border-t border-slate-100 dark:border-white/10">
                            <h4 class="text-xs font-bold uppercase text-slate-400 tracking-wider mb-4">Technology Stack</h4>
                            <div class="flex flex-wrap gap-2">
                                {#each techStack as tech}
                                    <span class="px-3 py-1 rounded bg-slate-100 dark:bg-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300">
                                        {tech}
                                    </span>
                                {/each}
                            </div>
                        </div>

                        <div class="mt-8">
                            <Button href={project.link} full>
                                Live Demo <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                            </Button>
                        </div>
                    </div>

                    <!-- Share / Mini Contact -->
                    <div class="rounded-2xl border border-slate-200 dark:border-white/10 p-6 bg-slate-50 dark:bg-white/5 text-center">
                        <p class="text-sm font-medium text-slate-600 dark:text-slate-400 mb-4">Suka dengan proyek ini?</p>
                        <a href="wanzofc.tech@gmail.com" class="text-sky-500 font-bold hover:underline">
                            Ajak saya berkolaborasi <i class="fa-regular fa-handshake ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Main Content Area -->
            <div class="lg:col-span-8 lg:order-1">
                <!-- Overview -->
                <div class="mb-12">
                    <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                        <span class="flex items-center justify-center w-8 h-8 rounded bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 text-sm">
                            <i class="fa-solid fa-layer-group"></i>
                        </span>
                        Overview Project
                    </h3>
                    <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                        {project.description}
                    </p>
                </div>

                <!-- Rich Content (Simulated Case Study) -->
                <div class="prose prose-lg prose-slate dark:prose-invert max-w-none">
                    {@html project.content}
                    
                    <!-- Dummy Content Extensions to Show Layout -->
                    <h3>Tantangan Utama</h3>
                    <p>
                        Salah satu tantangan terbesar dalam proyek ini adalah memastikan performa tetap optimal (Lighthouse score > 90) meskipun menggunakan banyak animasi kompleks dan asset visual berkualitas tinggi.
                    </p>
                    
                    <div class="my-8 grid md:grid-cols-2 gap-4 not-prose">
                        <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10">
                            <img src={project.image} class="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all" alt="Detail 1" />
                        </div>
                        <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10">
                            <img src={project.image} class="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all" alt="Detail 2" />
                        </div>
                    </div>

                    <h3>Solusi & Hasil</h3>
                    <p>
                        Kami menggunakan pendekatan <strong>Server-Side Rendering (SSR)</strong> dengan SvelteKit untuk meminimalkan beban di sisi klien. Hasilnya adalah loading time di bawah 1.5 detik pada jaringan 4G.
                    </p>
                    <ul>
                        <li><i class="fa-solid fa-bolt text-yellow-500 mr-2"></i> Peningkatan kecepatan akses 40%</li>
                        <li><i class="fa-solid fa-users text-blue-500 mr-2"></i> User retention naik 25%</li>
                        <li><i class="fa-solid fa-mobile-screen text-purple-500 mr-2"></i> Mobile responsiveness 100%</li>
                    </ul>
                </div>

                <!-- Navigation Next/Prev (Optional UI) -->
                <div class="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex justify-between">
                    <a href="#" class="group text-left">
                        <span class="block text-xs font-bold text-slate-400 uppercase">Previous</span>
                        <span class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">Mobile App Finansial</span>
                    </a>
                    <a href="#" class="group text-right">
                        <span class="block text-xs font-bold text-slate-400 uppercase">Next</span>
                        <span class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">Landing Page Corp</span>
                    </a>
                </div>
            </div>

        </div>
    </div>
{:else}
    <div class="h-screen flex flex-col items-center justify-center text-center px-4">
        <i class="fa-solid fa-ghost text-6xl text-slate-300 mb-6 animate-bounce"></i>
        <h1 class="text-3xl font-bold text-slate-900 dark:text-white">Proyek Tidak Ditemukan</h1>
        <a href="/" class="mt-6 px-6 py-2 bg-slate-900 text-white rounded-full">Kembali</a>
    </div>
{/if}

<Contact social={socialData} />