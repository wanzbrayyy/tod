<script>
    export let isOpen = false;
    export let onClose;
</script>

{#if isOpen}
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4" on:click={onClose} role="dialog">
        <div class="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl" on:click|stopPropagation>
            <button on:click={onClose} class="absolute top-4 right-4 z-10 rounded-full bg-white/80 p-2 text-slate-900 hover:bg-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <slot />
        </div>
    </div>
{/if}