<script>
	import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	
	export let projects = [];
</script>

<section id="projects" class="bg-slate-50 py-24 lg:py-32">
	<div class="container mx-auto px-6 lg:px-12">
		<SectionTitle 
			center 
			subtitle="Portofolio" 
			title="Karya Pilihan Terbaru" 
		/>
		
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project (project.id)}
				<Card 
					title={project.title} 
					category={project.category} 
					image={project.image}
				>
					{project.description}
				</Card>
			{/each}
		</div>

		<div class="mt-16 text-center">
			<a href="https://github.com/awanberlian" target="_blank" class="inline-flex items-center border-b-2 border-slate-900 pb-1 text-sm font-bold text-slate-900 hover:text-sky-600 hover:border-sky-600 transition-colors">
				Lihat Proyek Lainnya di GitHub
				<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
			</a>
		</div>
	</div>
</section>