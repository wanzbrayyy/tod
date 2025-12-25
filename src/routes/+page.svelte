<script>
	import Hero from '$lib/components/sections/Hero.svelte';
    import TechMarquee from '$lib/components/sections/TechMarquee.svelte';
	import About from '$lib/components/sections/About.svelte';
    import Services from '$lib/components/sections/Services.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
    import Blog from '$lib/components/sections/Blog.svelte';
    import Extras from '$lib/components/sections/Extras.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
    import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';
	
	import projectsData from '$lib/data/projects.json';
	import socialData from '$lib/data/social.json';
</script>

<svelte:head>
	<title>Awan Berlian | Digital Designer & Developer</title>
</svelte:head>

<div class="pt-20"> 
    <Breadcrumbs />
    <Hero />
    <TechMarquee />
    <About />
    <Services />
    <Projects projects={projectsData} />
    <Extras />
    <Blog />
    <Contact social={socialData} />
</div>