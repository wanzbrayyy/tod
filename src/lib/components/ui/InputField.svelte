<script>
	export let label;
	export let type = 'text';
	export let id;
	export let placeholder = '';
	export let textarea = false;
	export let rows = 4;
</script>

<div class="group relative">
	<label for={id} class="mb-2 block text-sm font-medium text-slate-700">
		{label}
	</label>
	{#if textarea}
		<textarea
			{id}
			{rows}
			{placeholder}
			class="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
		></textarea>
	{:else}
		<input
			{type}
			{id}
			{placeholder}
			class="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
		/>
	{/if}
</div>