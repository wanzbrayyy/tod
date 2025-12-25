<script>
	import { isSearchOpen } from '$lib/stores';
    import { onMount } from 'svelte';

    let inputEl;

    const close = () => isSearchOpen.set(false);
    
    onMount(() => {
        const handleKeydown = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                isSearchOpen.update(v => !v);
            }
            if (e.key === 'Escape') close();
        };
        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    });

    $: if ($isSearchOpen && inputEl) setTimeout(() => inputEl.focus(), 100);
</script>

{#if $isSearchOpen}
	<div class="fixed inset-0 z-[60] flex items-start justify-center bg-slate-900/50 p-4 pt-[20vh] backdrop-blur-sm" on:click={close} role="dialog">
		<div class="w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl" on:click|stopPropagation>
			<div class="flex items-center border-b border-slate-100 px-4 py-3">
                <svg class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
				<input bind:this={inputEl} type="text" placeholder="Cari proyek, artikel, atau halaman..." class="flex-1 border-none bg-transparent px-4 py-2 text-slate-900 placeholder-slate-400 focus:ring-0" />
                <span class="rounded border border-slate-200 px-2 py-0.5 text-xs text-slate-400">ESC</span>
			</div>
            <div class="p-2">
                <p class="px-4 py-8 text-center text-sm text-slate-500">Ketik untuk mulai mencari...</p>
            </div>
		</div>
	</div>
{/if}