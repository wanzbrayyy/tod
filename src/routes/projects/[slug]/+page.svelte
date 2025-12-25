<script>
    import { page } from '$app/stores';
    import projectsData from '$lib/data/projects.json';
    import Button from '$lib/components/ui/Button.svelte';
    import Contact from '$lib/components/sections/Contact.svelte';
    import socialData from '$lib/data/social.json';

    $: project = projectsData.find(p => p.slug === $page.params.slug);
</script>

<div class="pt-32 pb-20">
    {#if project}
        <div class="container mx-auto px-6 lg:px-12">
            <a href="/#projects" class="mb-8 inline-flex items-center text-sm font-bold text-slate-500 hover:text-sky-600">
                &larr; Kembali ke Proyek
            </a>

            <div class="grid gap-12 lg:grid-cols-2">
                <div class="space-y-6">
                    <span class="inline-block rounded-full bg-sky-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-700">
                        {project.category}
                    </span>
                    <h1 class="text-4xl font-extrabold text-slate-900 md:text-5xl lg:text-6xl">
                        {project.title}
                    </h1>
                    <div class="prose prose-lg prose-slate text-slate-600">
                        {@html project.content}
                    </div>
                    <div class="pt-6">
                        <Button href={project.link}>Kunjungi Website</Button>
                    </div>
                </div>

                <div class="relative">
                    <div class="overflow-hidden rounded-2xl bg-slate-100 shadow-2xl">
                        <img src={project.image} alt={project.title} class="w-full object-cover" />
                    </div>
                    <div class="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-slate-200/50"></div>
                </div>
            </div>
        </div>
    {:else}
        <div class="container mx-auto px-6 py-20 text-center">
            <h1 class="text-2xl font-bold">Proyek tidak ditemukan</h1>
            <a href="/" class="mt-4 inline-block text-sky-600 underline">Kembali ke Beranda</a>
        </div>
    {/if}
</div>

<Contact social={socialData} />