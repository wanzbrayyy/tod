<script>
    import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
    
    const posts = [
        { title: "Masa Depan SvelteKit di 2025", date: "20 Dec 2025", read: "5 min", img: "/images/blog-1.jpg" },
        { title: "Tips UI Minimalis Tanpa Membosankan", date: "15 Nov 2025", read: "3 min", img: "/images/blog-2.jpg" },
        { title: "Kenapa Saya Meninggalkan Redux", date: "01 Oct 2025", read: "7 min", img: "/images/blog-3.jpg" }
    ];
</script>

<section id="blog" class="py-24 bg-white">
    <div class="container mx-auto px-6 lg:px-12">
        <div class="flex items-center justify-between mb-12">
            <SectionTitle subtitle="Blog" title="Tulisan Terbaru" />
            <a href="/blog" class="hidden md:block text-sm font-bold text-sky-600 hover:underline">Lihat Semua</a>
        </div>
        
        <div class="grid gap-8 md:grid-cols-3">
            {#each posts as post}
                <article class="group cursor-pointer">
                    <div class="mb-5 overflow-hidden rounded-xl bg-slate-100 aspect-video relative">
                        <div class="absolute inset-0 bg-slate-200 animate-pulse"></div>
                        <img 
                            src={post.img} 
                            alt={post.title}
                            class="relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 z-20 bg-slate-900/0 transition-colors duration-500 group-hover:bg-slate-900/10"></div>
                    </div>
                    <div class="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
                        <span class="uppercase tracking-wider text-sky-500">Tech</span>
                        <span class="h-1 w-1 rounded-full bg-slate-300"></span>
                        <span>{post.date}</span>
                        <span class="h-1 w-1 rounded-full bg-slate-300"></span>
                        <span>{post.read} read</span>
                    </div>
                    <h3 class="text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-sky-600">
                        {post.title}
                    </h3>
                    <p class="mt-2 text-sm text-slate-600 line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, placeat.
                    </p>
                </article>
            {/each}
        </div>
        
        <div class="mt-8 text-center md:hidden">
             <a href="/blog" class="text-sm font-bold text-sky-600">Lihat Semua Artikel &rarr;</a>
        </div>
    </div>
</section>