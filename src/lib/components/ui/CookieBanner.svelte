<script>
    import { onMount } from 'svelte';
    import Button from './Button.svelte';
    
    let visible = false;
    
    onMount(() => {
        if (!localStorage.getItem('cookie-consent')) visible = true;
    });

    const accept = () => {
        localStorage.setItem('cookie-consent', 'true');
        visible = false;
    };
</script>

{#if visible}
    <div class="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:flex md:items-center md:justify-between">
        <p class="text-sm text-slate-600 mb-4 md:mb-0">web ini menggunakan cookie untuk performa lebih baik.</p>
        <div class="flex gap-3">
            <Button variant="outline" on:click={() => visible = false}>close</Button>
            <Button on:click={accept}>accept all</Button>
        </div>
    </div>
{/if}