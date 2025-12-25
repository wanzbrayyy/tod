<script>
    import Modal from '$lib/components/ui/Modal.svelte';
    import Button from '$lib/components/ui/Button.svelte';
    import { showToast } from '$lib/stores';

    let showResume = false;
    let showVideo = false;

    // Dummy Github contribution data visuals
    const weeks = Array(52).fill(0).map(() => Array(7).fill(0).map(() => Math.random() > 0.7 ? Math.floor(Math.random() * 4) : 0));
    
    const colors = ['bg-slate-100', 'bg-sky-200', 'bg-sky-400', 'bg-sky-600', 'bg-sky-800'];

    const copyCode = () => {
        navigator.clipboard.writeText(`console.log("Hello World");`);
        showToast("Kode berhasil disalin!", "success");
    };
</script>

<section class="py-24 bg-slate-50 border-t border-slate-200">
    <div class="container mx-auto px-6 lg:px-12 grid gap-12 lg:grid-cols-2">
        <!-- Column 1: Code & Github -->
        <div class="space-y-8">
            <div>
                <h3 class="mb-4 text-lg font-bold text-slate-900 flex items-center gap-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Github Contributions
                </h3>
                <div class="flex gap-1 overflow-hidden p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    {#each weeks.slice(0, 20) as week}
                        <div class="flex flex-col gap-1">
                            {#each week as day}
                                <div class="h-2.5 w-2.5 rounded-sm {colors[day]}"></div>
                            {/each}
                        </div>
                    {/each}
                </div>
            </div>

            <div class="relative overflow-hidden rounded-xl bg-slate-900 p-6 text-slate-300 shadow-xl">
                <div class="mb-4 flex items-center justify-between">
                    <div class="flex space-x-2">
                        <div class="h-3 w-3 rounded-full bg-red-500"></div>
                        <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div class="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <button class="text-xs font-bold uppercase hover:text-white" on:click={copyCode}>Copy</button>
                </div>
                <pre class="font-mono text-sm overflow-x-auto"><code><span class="text-sky-400">const</span> <span class="text-yellow-300">portfolio</span> = <span class="text-sky-400">new</span> <span class="text-green-400">Awesome</span>();
portfolio.<span class="text-purple-400">init</span>({
  design: <span class="text-orange-400">"Modern Z"</span>,
  performance: <span class="text-orange-400">"100%"</span>
});</code></pre>
            </div>
        </div>

        <!-- Column 2: Media & Resume -->
        <div class="flex flex-col justify-center space-y-6">
            <div class="relative group cursor-pointer overflow-hidden rounded-2xl bg-black" on:click={() => showVideo = true}>
                <img src="/images/hero-illustration.png" alt="Video Thumb" class="h-48 w-full object-cover opacity-60 transition group-hover:opacity-40" />
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur transition group-hover:scale-110 group-hover:bg-white/30">
                        <svg class="h-8 w-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
                <div class="absolute bottom-4 left-4 font-bold text-white">Tonton Showreel 2025</div>
            </div>

            <div class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <div class="flex-1">
                    <h4 class="font-bold text-slate-900">Curriculum Vitae</h4>
                    <p class="text-sm text-slate-500">PDF, 2.4 MB</p>
                </div>
                <Button variant="outline" on:click={() => showResume = true}>Preview</Button>
            </div>
        </div>
    </div>

    <!-- Modals -->
    <Modal isOpen={showVideo} onClose={() => showVideo = false}>
        <div class="aspect-video w-full bg-black">
             <iframe class="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </Modal>

    <Modal isOpen={showResume} onClose={() => showResume = false}>
        <div class="h-[80vh] bg-slate-100 flex flex-col">
            <iframe src="/resume.pdf" class="flex-1 w-full" title="Resume PDF"></iframe>
            <div class="p-4 bg-white border-t border-slate-200 text-right">
                <Button on:click={() => window.open('/resume.pdf', '_blank')}>Download PDF</Button>
            </div>
        </div>
    </Modal>
</section>