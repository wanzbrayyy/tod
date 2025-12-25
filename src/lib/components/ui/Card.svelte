<script>
	export let image = "";
	export let title;
	export let category;
</script>

<div class="group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50">
	{#if image}
		<div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
			<img 
				src={image} 
				alt={title} 
				class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
			/>
			<div class="absolute inset-0 bg-slate-900/0 transition-colors duration-500 group-hover:bg-slate-900/10"></div>
		</div>
	{/if}
	
	<div class="p-8">
		<span class="mb-2 block text-xs font-bold uppercase tracking-wider text-sky-500">
			{category}
		</span>
		<h3 class="mb-3 text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
			{title}
		</h3>
		<p class="text-slate-600 leading-relaxed text-sm">
			<slot />
		</p>
		
		<div class="mt-6 flex items-center text-sm font-semibold text-slate-900">
			Lihat Detail 
			<svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</div>
	</div>
</div>