<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let activeTab = 'POST';
    let copied = false;
    let sidebarOpen = false;
    let baseUrl = '';

    onMount(() => {
        baseUrl = window.location.origin;
    });

    $: clientCode = `import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: "${baseUrl || 'https://your-domain.com'}/v1",
  apiKey: "wanz-free-key",
  dangerouslyAllowBrowser: true
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: "nex-agi/deepseek-v3.1-nex-n1:free",
    messages: [{ "role": "user", "content": "Hello WanzAPI!" }]
  });
  console.log(completion.choices[0].message);
}

main();`;

    function copyCode() {
        navigator.clipboard.writeText(clientCode);
        copied = true;
        setTimeout(() => copied = false, 2000);
    }

    function toggleSidebar() {
        sidebarOpen = !sidebarOpen;
    }
</script>

<div class="app-container">
    <nav class="mobile-header">
        <div class="logo">
            <i class="fa-solid fa-bolt"></i> WanzAPI
        </div>
        <button class="menu-btn" on:click={toggleSidebar}>
            <i class="fa-solid {sidebarOpen ? 'fa-xmark' : 'fa-bars'}"></i>
        </button>
    </nav>

    <aside class="sidebar {sidebarOpen ? 'open' : ''}">
        <div class="sidebar-header">
            <i class="fa-solid fa-bolt accent-icon"></i>
            <span>WanzAPI</span>
        </div>
        
        <div class="nav-group">
            <div class="nav-label">Core Resources</div>
            <button class:active={activeTab === 'GET'} on:click={() => {activeTab = 'GET'; sidebarOpen = false;}}>
                <span class="badge get">GET</span> Health
            </button>
            <button class:active={activeTab === 'POST'} on:click={() => {activeTab = 'POST'; sidebarOpen = false;}}>
                <span class="badge post">POST</span> Completions
            </button>
        </div>

        <div class="sidebar-footer">
            <small>&copy; 2025 WanzAPI Inc.</small>
        </div>
    </aside>

    <div class="overlay {sidebarOpen ? 'active' : ''}" on:click={() => sidebarOpen = false}></div>

    <main class="content">
        {#if activeTab === 'POST'}
            <div class="fade-in">
                <header class="doc-header">
                    <div class="breadcrumbs">API / Chat / Completions</div>
                    <h1>Generate Response</h1>
                    <p>Endpoint proxy OpenAI-compatible untuk interaksi AI chat menggunakan model Deepseek.</p>
                </header>

                <div class="endpoint-card">
                    <div class="method-marker post">POST</div>
                    <code class="url">{baseUrl}/v1/chat/completions</code>
                </div>

                <div class="code-window">
                    <div class="window-header">
                        <div class="dots">
                            <span></span><span></span><span></span>
                        </div>
                        <span class="lang">Node.js</span>
                        <button class="copy-action" on:click={copyCode}>
                            <i class="fa-regular {copied ? 'fa-circle-check' : 'fa-copy'}"></i>
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </div>
                    <pre><code>{clientCode}</code></pre>
                </div>
            </div>
        {:else}
            <div class="fade-in">
                <header class="doc-header">
                    <div class="breadcrumbs">API / System / Health</div>
                    <h1>Server Status</h1>
                    <p>Cek ketersediaan server dan latency respon.</p>
                </header>

                <div class="endpoint-card">
                    <div class="method-marker get">GET</div>
                    <code class="url">{baseUrl}/</code>
                </div>

                <div class="response-card">
                    <h3>Response Example</h3>
                    <pre><code class="json">status: 200 OK</code></pre>
                </div>
            </div>
        {/if}
    </main>
</div>

<style>
    .app-container { display: flex; min-height: 100vh; position: relative; }
    
    /* Mobile Header */
    .mobile-header {
        display: none;
        position: fixed;
        top: 0; left: 0; right: 0;
        height: 60px;
        background: rgba(9, 9, 11, 0.9);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid var(--border);
        z-index: 100;
        padding: 0 20px;
        align-items: center;
        justify-content: space-between;
    }
    
    .logo { font-weight: 700; font-size: 1.2rem; display: flex; gap: 10px; align-items: center; color: var(--text-main); }
    .menu-btn { background: none; border: none; color: var(--text-main); font-size: 1.2rem; cursor: pointer; padding: 5px; }

    /* Sidebar */
    .sidebar {
        width: 260px;
        background: var(--bg-main);
        border-right: 1px solid var(--border);
        display: flex;
        flex-direction: column;
        padding: 24px;
        position: fixed;
        height: 100vh;
        z-index: 50;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .sidebar-header {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        gap: 12px;
        background: linear-gradient(135deg, #fff 0%, #a1a1aa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .accent-icon { -webkit-text-fill-color: var(--accent); font-size: 1.2rem; }

    .nav-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        color: var(--text-muted);
        font-weight: 600;
        letter-spacing: 0.05em;
        margin-bottom: 12px;
        padding-left: 12px;
    }

    .sidebar button {
        width: 100%;
        background: transparent;
        border: 1px solid transparent;
        color: var(--text-muted);
        padding: 10px 12px;
        text-align: left;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 4px;
        transition: all 0.2s;
        font-family: var(--font-ui);
        font-size: 0.9rem;
    }

    .sidebar button:hover { background: rgba(255,255,255,0.03); color: var(--text-main); }
    
    .sidebar button.active {
        background: var(--accent-glow);
        border: 1px solid rgba(99, 102, 241, 0.3);
        color: var(--text-main);
    }

    .badge {
        font-size: 0.65rem;
        font-weight: 700;
        padding: 2px 6px;
        border-radius: 4px;
        min-width: 40px;
        text-align: center;
    }
    .badge.get { color: var(--info); background: rgba(59, 130, 246, 0.1); }
    .badge.post { color: var(--success); background: rgba(16, 185, 129, 0.1); }

    .sidebar-footer { margin-top: auto; color: var(--text-muted); font-size: 0.8rem; text-align: center; padding-top: 20px; border-top: 1px solid var(--border); }

    /* Content */
    .content {
        flex: 1;
        margin-left: 260px;
        padding: 60px 80px;
        max-width: 1200px;
    }

    .breadcrumbs { color: var(--accent); font-size: 0.85rem; font-weight: 600; margin-bottom: 16px; letter-spacing: 0.02em; }
    h1 { font-size: 2.5rem; margin: 0 0 16px 0; font-weight: 700; letter-spacing: -0.02em; }
    p { color: var(--text-muted); line-height: 1.6; font-size: 1.1rem; max-width: 600px; margin: 0 0 40px 0; }

    .endpoint-card {
        background: var(--bg-panel);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 32px;
        font-family: var(--font-code);
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    }

    .method-marker {
        font-weight: 700;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 0.9rem;
    }
    .method-marker.post { background: var(--success); color: #000; }
    .method-marker.get { background: var(--info); color: #000; }
    .url { word-break: break-all; color: var(--text-main); }

    .code-window {
        background: #000;
        border: 1px solid var(--border);
        border-radius: 12px;
        overflow: hidden;
    }

    .window-header {
        background: #1e1e20;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--border);
    }

    .dots { display: flex; gap: 6px; margin-right: 16px; }
    .dots span { width: 10px; height: 10px; border-radius: 50%; background: #3f3f46; }
    .lang { color: var(--text-muted); font-size: 0.85rem; flex: 1; }

    .copy-action {
        background: rgba(255,255,255,0.1);
        border: none;
        color: var(--text-main);
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 0.8rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .copy-action:hover { background: rgba(255,255,255,0.2); }

    pre { margin: 0; padding: 24px; overflow-x: auto; color: #e4e4e7; font-size: 0.9rem; line-height: 1.5; }
    
    .response-card { background: var(--bg-panel); border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
    .response-card h3 { margin: 0 0 10px 0; font-size: 1rem; color: var(--text-muted); }

    .fade-in { animation: fadeIn 0.4s ease-out; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

    .overlay { display: none; }

    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        .mobile-header { display: flex; }
        
        .sidebar {
            transform: translateX(-100%);
            top: 60px; /* Below header */
            height: calc(100vh - 60px);
            width: 80%;
            max-width: 300px;
            background: rgba(9, 9, 11, 0.95);
            backdrop-filter: blur(10px);
        }
        
        .sidebar.open { transform: translateX(0); }
        .sidebar-header { display: none; } /* Hide in sidebar, shown in topbar */

        .content { margin-left: 0; padding: 90px 20px 40px 20px; width: 100%; }
        
        h1 { font-size: 1.8rem; }
        p { font-size: 1rem; }

        .overlay {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.5); z-index: 40;
            display: block; pointer-events: none; opacity: 0;
            transition: opacity 0.3s;
        }
        .overlay.active { pointer-events: auto; opacity: 1; }
    }
</style>