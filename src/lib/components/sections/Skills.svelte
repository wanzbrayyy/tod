<script>
	const skills = [
		"Svelte & SvelteKit", "Java", "kotlin", "Tailwind CSS", 
		"Node.js", "Figma", "UI/UX Design", "Git Workflow", "rust"
	];
</script>

<h3 class="mb-6 text-sm font-bold uppercase tracking-widest text-slate-900">Teknologi & Tools</h3>
<div class="flex flex-wrap gap-3">
	{#each skills as skill}
		<span class="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 cursor-default">
			{skill}
		</span>
	{/each}
</div>