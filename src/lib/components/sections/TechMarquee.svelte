<script>
    const stack = [
        "SvelteKit", "TypeScript", "TailwindCSS", "Node.js", "React Native", "Figma", 
        "Vercel", "Supabase", "Docker", "GraphQL", "Next.js", "Stripe", "PostgreSQL", "AWS"
    ];
    const items = [...stack, ...stack, ...stack, ...stack]; 
</script>

<section class="border-y border-slate-100 bg-white py-10 overflow-hidden relative">
    <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
    <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

    <div class="flex whitespace-nowrap w-max">
        <div class="flex animate-marquee items-center">
            {#each items as item, i}
                <div class="mx-8 flex items-center gap-3 group cursor-default">
                    <div class="h-3 w-3 rounded-full bg-slate-200 group-hover:bg-sky-400 transition-colors"></div>
                    <span class="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors select-none">{item}</span>
                </div>
            {/each}
        </div>
    </div>
</section>