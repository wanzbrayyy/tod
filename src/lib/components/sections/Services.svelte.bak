<script>
    import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
    import Button from '$lib/components/ui/Button.svelte';

    const pricing = [
        { name: "Starter", price: "Rp 2jt", features: ["Landing Page", "3 Revisi", "Responsive"] },
        { name: "Pro", price: "Rp 5jt", features: ["5 Halaman", "CMS", "SEO Dasar", "Source Code"], popular: true },
        { name: "Enterprise", price: "Custom", features: ["Full Stack App", "Maintenance", "Cloud Server"] }
    ];

    let openFaq = 0;
    const faqs = [
        { q: "Berapa lama pengerjaan?", a: "Tergantung kompleksitas, rata-rata 1-3 minggu." },
        { q: "Apakah ada garansi?", a: "Ya, maintenance gratis selama 30 hari setelah peluncuran." },
        { q: "Platform apa yang digunakan?", a: "Spesialisasi saya di sveltekit, React, dan Node.js, Java, tergantung pada costumer ." }
    ];
</script>

<section class="py-24 bg-white">
    <div class="container mx-auto px-6 lg:px-12">
        <SectionTitle center subtitle="Layanan" title="Solusi & Penawaran" />
        
        <div class="grid gap-8 md:grid-cols-3 mb-24">
            {#each pricing as plan}
                <div class="relative flex flex-col rounded-2xl border {plan.popular ? 'border-sky-500 shadow-xl scale-105 z-10' : 'border-slate-200'} bg-white p-8">
                    {#if plan.popular}<span class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500 px-3 py-1 text-xs font-bold text-white">TERPOPULER</span>{/if}
                    <h3 class="text-lg font-bold text-slate-900">{plan.name}</h3>
                    <div class="mt-4 mb-6 text-4xl font-extrabold text-slate-900">{plan.price}</div>
                    <ul class="mb-8 flex-1 space-y-4">
                        {#each plan.features as feature}
                            <li class="flex items-center text-sm text-slate-600">
                                <svg class="mr-3 h-5 w-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                {feature}
                            </li>
                        {/each}
                    </ul>
                    <Button variant={plan.popular ? 'primary' : 'outline'} full>Pilih Paket</Button>
                </div>
            {/each}
        </div>

        <div class="mx-auto max-w-2xl">
            <h3 class="mb-8 text-2xl font-bold text-center text-slate-900">FAQ</h3>
            <div class="space-y-4">
                {#each faqs as item, i}
                    <div class="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                        <button class="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-slate-900 focus:outline-none" on:click={() => openFaq = openFaq === i ? -1 : i}>
                            <span>{item.q}</span>
                            <svg class="h-5 w-5 transition-transform {openFaq === i ? 'rotate-180' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {#if openFaq === i}
                            <div class="px-6 pb-4 text-sm text-slate-600">{item.a}</div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>