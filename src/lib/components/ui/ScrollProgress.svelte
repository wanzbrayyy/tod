<script>
    import { onMount } from 'svelte';
    
    let progress = 0;

    const updateProgress = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (height) {
            progress = (winScroll / height) * 100;
        }
    };
</script>

<svelte:window on:scroll={updateProgress} />

<div class="fixed top-0 left-0 right-0 z-[100] h-1 w-full bg-transparent pointer-events-none">
    <div 
        class="h-full bg-gradient-to-r from-sky-400 to-sky-600 transition-all duration-100 ease-out shadow-[0_0_10px_rgba(14,165,233,0.5)]" 
        style="width: {progress}%"
    ></div>
</div>