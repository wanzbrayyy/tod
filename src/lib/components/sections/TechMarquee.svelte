<script>
    const stack = [
        "SvelteKit", "TypeScript", "TailwindCSS", "Node.js", "React Native", "java", 
        "rust", "Supabase", "Docker", "GraphQL", "Next.js", "Stripe"
    ];
    const items = [...stack, ...stack, ...stack, ...stack]; 
    
    // Icon mapping (Simplified for demo)
    const getIcon = (name) => {
        if(name.includes('React')) return 'fa-brands fa-react';
        if(name.includes('Node')) return 'fa-brands fa-node';
        if(name.includes('Figma')) return 'fa-brands fa-figma';
        if(name.includes('Docker')) return 'fa-brands fa-docker';
        return 'fa-solid fa-code'; // default
    }
</script>

<section class="border-y border-slate-100 dark:border-white/5 bg-white dark:bg-[#0a0a0a] py-10 overflow-hidden relative">
    <!-- Gradient Fade -->
    <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
    <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

    <div class="flex whitespace-nowrap w-max">
        <div class="flex animate-marquee items-center">
            {#each items as item}
                <div class="mx-8 flex items-center gap-3 group cursor-default opacity-50 hover:opacity-100 transition-opacity">
                    <i class="{getIcon(item)} text-2xl text-slate-400 dark:text-slate-600 group-hover:text-sky-500"></i>
                    <span class="text-xl font-bold text-slate-400 dark:text-slate-600 group-hover:text-slate-900 dark:group-hover:text-white transition-colors select-none">{item}</span>
                </div>
            {/each}
        </div>
    </div>
</section>