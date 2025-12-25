<script>
    import { page } from '$app/stores';
    
    $: crumbs = $page.url.pathname.split('/').filter(Boolean);
</script>

<div class="w-full bg-slate-50/50 backdrop-blur-sm border-b border-slate-100 py-2 px-6 lg:px-12">
    <nav class="flex text-xs font-medium text-slate-500">
        <a href="/" class="hover:text-sky-600 transition-colors">Home</a>
        {#each crumbs as crumb, i}
            <span class="mx-2 text-slate-300">/</span>
            {#if i === crumbs.length - 1}
                <span class="capitalize text-slate-900">{crumb}</span>
            {:else}
                <a href="/{crumb}" class="capitalize hover:text-sky-600 transition-colors">{crumb}</a>
            {/if}
        {/each}
    </nav>
</div>