<script>
	import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
	import InputField from '$lib/components/ui/InputField.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	
	export let social = [];
	const currentYear = new Date().getFullYear();
</script>

<section id="contact" class="bg-white pt-24 pb-12 lg:pt-32">
	<div class="container mx-auto px-6 lg:px-12">
		<div class="grid gap-16 lg:grid-cols-2">
			<div>
				<SectionTitle 
					subtitle="Kontak" 
					title="Mari Mulai Sesuatu yang Hebat" 
				/>
				<p class="mb-12 text-lg text-slate-600 max-w-md">
					Tertarik berkolaborasi atau sekadar ingin menyapa? Jangan ragu untuk mengisi formulir atau menghubungi saya melalui media sosial.
				</p>

				<div class="space-y-8">
					{#each social as item}
						<a 
							href={item.url} 
							target="_blank" 
							class="group flex items-center space-x-4 transition-transform hover:translate-x-2"
						>
							<div class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-900 ring-1 ring-slate-200 transition-colors group-hover:bg-sky-50 group-hover:text-sky-600 group-hover:ring-sky-200">
								<!-- Icon logic simple based on text usually, here generic icon -->
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
							</div>
							<div>
								<p class="text-xs font-bold uppercase tracking-wider text-slate-400">{item.platform}</p>
								<p class="text-lg font-medium text-slate-900 group-hover:text-sky-600">{item.handle}</p>
							</div>
						</a>
					{/each}
				</div>
			</div>

			<div class="rounded-3xl bg-slate-50 p-8 shadow-lg ring-1 ring-slate-100 lg:p-12">
				<form class="space-y-6" on:submit|preventDefault>
					<div class="grid gap-6 md:grid-cols-2">
						<InputField id="name" label="Nama Lengkap" placeholder="John Doe" />
						<InputField id="email" type="email" label="Alamat Email" placeholder="john@example.com" />
					</div>
					<InputField id="subject" label="Subjek" placeholder="Proyek Website..." />
					<InputField id="message" textarea label="Pesan" rows={5} placeholder="Ceritakan detail proyekmu..." />
					
					<div class="pt-2">
						<Button full type="submit">Kirim Pesan</Button>
					</div>
				</form>
			</div>
		</div>

		<!-- Custom Footer Area inside Contact Section -->
		<div class="mt-24 border-t border-slate-100 pt-8 text-center md:flex md:items-center md:justify-between md:text-left">
			<div class="mb-4 md:mb-0">
				<span class="text-xl font-bold text-slate-900">Awan<span class="text-sky-500">.</span></span>
			</div>
			<p class="text-sm text-slate-400">
				&copy; {currentYear} Awan Berlian. Dibuat dengan SvelteKit & Tailwind.
			</p>
		</div>
	</div>
</section>