<script>
	import { toast } from '$lib/stores';
    import { fly } from 'svelte/transition';
</script>

{#if $toast.show}
	<div 
        transition:fly={{ y: 20, duration: 300 }}
        class="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg bg-slate-900 px-6 py-4 text-white shadow-2xl"
    >
		<div class="h-2 w-2 rounded-full {$toast.type === 'success' ? 'bg-green-400' : 'bg-sky-400'}"></div>
		<p class="text-sm font-medium">{$toast.message}</p>
	</div>
{/if}