<script>
	export let image = "";
	export let title;
	export let category;
</script>

<div class="group relative overflow-hidden rounded-2xl glass-card hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-900/10 dark:hover:shadow-sky-500/10 dark:hover:border-sky-500/30">
	{#if image}
		<div class="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
			<img 
				src={image} 
				alt={title} 
				class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div class="absolute bottom-4 left-4 text-white translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <span class="inline-block p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
            </div>
		</div>
	{/if}
	
	<div class="p-8">
        <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-sky-500 dark:text-sky-400">
                {category}
            </span>
            <span class="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400">
                <i class="fa-solid fa-folder-open"></i>
            </span>
        </div>
		
		<h3 class="mb-3 text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
			{title}
		</h3>
		<p class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm line-clamp-3">
			<slot />
		</p>
	</div>
</div>