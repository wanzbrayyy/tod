<script>
	import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let box;
    let position = { x: 0, y: 0 };
    
    // Simple logic to move box away from cursor
    const handleMouseMove = (e) => {
        if (!box) return;
        const rect = box.getBoundingClientRect();
        const boxCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
        
        const angle = Math.atan2(e.clientY - boxCenter.y, e.clientX - boxCenter.x);
        const distance = Math.hypot(e.clientX - boxCenter.x, e.clientY - boxCenter.y);
        
        if (distance < 150) {
            const force = (150 - distance) * 0.5;
            position.x -= Math.cos(angle) * force;
            position.y -= Math.sin(angle) * force;
        } else {
            // Return to center slowly
            position.x *= 0.95;
            position.y *= 0.95;
        }
    };
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div class="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-900 text-center px-4 relative">
    <!-- Background grid -->
    <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(#4b5563 1px, transparent 1px); background-size: 32px 32px;"></div>

	<div 
        bind:this={box}
        class="relative z-10 flex flex-col items-center justify-center p-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transition-transform duration-75 ease-out cursor-pointer"
        style="transform: translate({position.x}px, {position.y}px)"
    >
        <h1 class="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-purple-500">404</h1>
    	<h2 class="mt-4 text-2xl font-bold text-white">Halaman Hilang!</h2>
    	<p class="mt-2 text-slate-400 max-w-xs">Coba tangkap lingkaran ini atau kembali ke jalan yang benar.</p>
        
    	<a 
    		href="/" 
    		class="mt-8 rounded-full bg-white px-8 py-3 text-sm font-bold text-slate-900 transition hover:bg-sky-400 hover:scale-105"
    	>
    		Kembali ke Beranda
    	</a>
    </div>
    
    <div class="absolute bottom-8 text-slate-500 text-sm">
        Gerakkan mouse mendekati lingkaran
    </div>
</div>