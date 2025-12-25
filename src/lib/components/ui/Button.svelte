<script>
	export let href = null;
	export let variant = 'primary'; 
	export let type = 'button';
	export let full = false;

	const baseClasses = "inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";
	
	const variants = {
		primary: "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 focus:ring-slate-900",
		secondary: "bg-sky-100 text-sky-700 hover:bg-sky-200 focus:ring-sky-500",
		outline: "border border-slate-200 text-slate-700 hover:border-slate-900 hover:text-slate-900 bg-transparent focus:ring-slate-900"
	};

	$: classes = `${baseClasses} ${variants[variant]} ${full ? 'w-full' : ''}`;
</script>

{#if href}
	<a {href} class={classes} role="button">
		<slot />
	</a>
{:else}
	<button {type} class={classes} on:click>
		<slot />
	</button>
{/if}