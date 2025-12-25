<script>
	import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
	import Skills from './Skills.svelte';
</script>

<section id="about" class="py-24 lg:py-32 bg-white">
	<div class="container mx-auto px-6 lg:px-12">
		<div class="grid gap-16 lg:grid-cols-2">
			<div>
				<div class="sticky top-32">
					<div class="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
						<img 
							src="/images/profile-pic.jpg" 
							alt="Awan Berlian Profile" 
							class="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0" 
						/>
					</div>
				</div>
			</div>
			
			<div class="flex flex-col justify-center">
				<SectionTitle 
					subtitle="Tentang Saya" 
					title="Menggabungkan Kode dengan Desain yang Bermakna" 
				/>
				
				<div class="space-y-6 text-lg text-slate-600 leading-relaxed">
					<p>
						Perjalanan saya dalam dunia digital dimulai dari rasa penasaran bagaimana sebuah baris kode bisa berubah menjadi interaksi visual yang memukau. Dengan latar belakang desain grafis dan ilmu komputer, saya menjembatani kesenjangan antara estetika dan teknis.
					</p>
					<p>
						Saya percaya bahwa "Less is More". Dalam setiap proyek, saya berusaha menghilangkan elemen yang tidak perlu untuk menonjolkan fungsi utama tanpa mengorbankan keindahan visual.
					</p>
				</div>

				<div class="mt-12">
					<Skills />
				</div>
			</div>
		</div>
	</div>
</section>