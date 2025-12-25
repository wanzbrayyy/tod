<script>
	export let title;
	export let subtitle = "";
	export let center = false;
</script>

<div class={`mb-16 ${center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
	{#if subtitle}
		<span class="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-sky-500">
			{subtitle}
		</span>
	{/if}
	<h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
		{title}
	</h2>
	<div class={`mt-6 h-1 w-24 rounded-full bg-sky-400 ${center ? 'mx-auto' : ''}`}></div>
</div>