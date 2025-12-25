<script>
	import Button from '$lib/components/ui/Button.svelte';
	import { scrollToSection } from '$lib/utils/scrollSmooth';
</script>

<section id="home" class="relative flex min-h-screen items-center overflow-hidden pt-20">
	<div class="absolute -right-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-sky-100/50 blur-[100px]"></div>
	<div class="absolute left-[5%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-slate-100/60 blur-[80px]"></div>

	<div class="container mx-auto px-6 lg:px-12 relative z-10">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<div class="max-w-2xl">
				<div class="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
					<span class="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
					<span class="text-xs font-semibold uppercase tracking-wide text-slate-600">Open for work</span>
				</div>
				
				<h1 class="mb-8 text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1] sm:text-6xl xl:text-7xl">
					Menciptakan <br />
					<span class="bg-gradient-to-r from-sky-500 to-sky-300 bg-clip-text text-transparent">digital experience</span>
				</h1>
				
				<p class="mb-10 text-lg leading-relaxed text-slate-600 sm:text-xl max-w-lg">
					Halo, saya Awan Berlian. backend dan frontend developer hingga cyber security yang berfokus pada performa, estetika minimalis, dan pengalaman pengguna yang intuitif.
				</p>
				
				<div class="flex flex-wrap gap-4">
					<Button on:click={() => scrollToSection('projects')}>Lihat Karya Saya</Button>
					<Button variant="outline" on:click={() => scrollToSection('contact')}>Hubungi Saya</Button>
				</div>
			</div>

			<div class="relative hidden lg:block">
				<div class="relative z-10 aspect-square rounded-[2rem] bg-slate-50 border border-slate-100 p-8 shadow-2xl shadow-slate-200/50">
					<div class="h-full w-full rounded-xl bg-gradient-to-br from-slate-200 to-slate-100 overflow-hidden relative">
                        <img src="/images/hero-illustration.png" alt="Abstract 3D Shape" class="w-full h-full object-cover mix-blend-multiply opacity-80" />
                    </div>
				</div>
				<div class="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-[2rem] bg-sky-50"></div>
			</div>
		</div>
	</div>
</section>