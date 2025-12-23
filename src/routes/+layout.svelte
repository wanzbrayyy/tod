<slot />

<style :global>
    :root {
        --bg-main: #09090b;
        --bg-panel: #18181b;
        --border: #27272a;
        --accent: #6366f1;
        --accent-glow: rgba(99, 102, 241, 0.15);
        --text-main: #f4f4f5;
        --text-muted: #a1a1aa;
        --success: #10b981;
        --info: #3b82f6;
        --font-ui: 'Inter', sans-serif;
        --font-code: 'JetBrains Mono', monospace;
    }

    body {
        margin: 0;
        background-color: var(--bg-main);
        color: var(--text-main);
        font-family: var(--font-ui);
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden;
    }

    * { box-sizing: border-box; }

    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: var(--bg-main); }
    ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
</style>