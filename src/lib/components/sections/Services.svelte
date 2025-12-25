<script>
    import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
    import Button from '$lib/components/ui/Button.svelte';

    // Data Pricing
    const pricing = [
        { name: "Starter", price: "Rp 2jt", features: ["Single Page Landing", "Design Responsif", "SEO Basic", "3x Revisi"] },
        { name: "Pro", price: "Rp 5jt", features: ["5 Halaman Statis", "CMS Integrasi", "SEO Advanced", "Analytics Dashboard", "Source Code", "Priority Support"], popular: true },
        { name: "Enterprise", price: "Custom", features: ["Full Stack App", "Database & API", "User Authentication", "Cloud Deployment", "Monthly Maintenance"] }
    ];

    let openFaq = 0;
    const faqs = [
        { q: "Berapa lama estimasi pengerjaan proyek?", a: "Untuk landing page sederhana memakan waktu 3-7 hari. Untuk aplikasi web kompleks bisa memakan waktu 2-4 minggu tergantung fitur." },
        { q: "Apakah ada garansi setelah website jadi?", a: "Ya, saya memberikan garansi maintenance gratis selama 30 hari untuk perbaikan bug minor setelah peluncuran." },
        { q: "Apa teknologi yang Anda gunakan?", a: "Saya berspesialisasi dalam stack modern: SvelteKit, React, Tailwind CSS, dan Node.js untuk memastikan performa maksimal." }
    ];
</script>

<section id="services" class="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
    <div class="container mx-auto px-6 lg:px-12">
        <SectionTitle center subtitle="Layanan & Harga" title="Investasi Digital Terbaik" />
        
        <!-- Pricing Grid -->
        <div class="grid gap-8 md:grid-cols-3 mb-24 items-start">
            {#each pricing as plan}
                <div class={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 
                    ${plan.popular 
                        ? 'bg-white dark:bg-white/5 border-sky-500 dark:border-sky-500 shadow-xl shadow-sky-500/10 scale-105 z-10' 
                        : 'bg-slate-50 dark:bg-transparent border-slate-200 dark:border-white/10 hover:border-sky-300 dark:hover:border-sky-700'
                    }`}
                >
                    {#if plan.popular}
                        <span class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-sky-500/30">
                            Paling Laris
                        </span>
                    {/if}
                    
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                    <div class="mt-4 mb-6">
                        <span class="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">{plan.price}</span>
                        {#if plan.price !== "Custom"}<span class="text-sm text-slate-500 dark:text-slate-400">/project</span>{/if}
                    </div>
                    
                    <ul class="mb-8 flex-1 space-y-4">
                        {#each plan.features as feature}
                            <li class="flex items-start text-sm text-slate-600 dark:text-slate-300">
                                <span class="mr-3 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400">
                                    <i class="fa-solid fa-check text-xs"></i>
                                </span>
                                {feature}
                            </li>
                        {/each}
                    </ul>
                    
                    <Button variant={plan.popular ? 'primary' : 'outline'} full href="#contact">
                        Pilih Paket
                    </Button>
                </div>
            {/each}
        </div>

        <!-- FAQ Section -->
        <div class="mx-auto max-w-2xl">
            <h3 class="mb-8 text-2xl font-bold text-center text-slate-900 dark:text-white">Pertanyaan Umum (FAQ)</h3>
            <div class="space-y-4">
                {#each faqs as item, i}
                    <div class="overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 transition-all">
                        <button 
                            class="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-slate-900 dark:text-white focus:outline-none hover:bg-slate-100 dark:hover:bg-white/5 transition-colors" 
                            on:click={() => openFaq = openFaq === i ? -1 : i}
                        >
                            <span class="pr-8">{item.q}</span>
                            <i class={`fa-solid fa-chevron-down text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-sky-500' : ''}`}></i>
                        </button>
                        {#if openFaq === i}
                            <div class="px-6 pb-6 pt-0 text-sm leading-relaxed text-slate-600 dark:text-slate-400 border-t border-slate-200/50 dark:border-white/5 mt-2">
                                <div class="pt-4">{item.a}</div>
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>