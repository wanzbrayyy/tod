<script>
    import { page } from '$app/stores';
    
    let activeTab = 'POST';
    let copied = false;
    let baseUrl = $page.url.origin;

    $: clientCode = `import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: "${baseUrl}/v1",
  apiKey: "dummy-key",
  dangerouslyAllowBrowser: true
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: "nex-agi/deepseek-v3.1-nex-n1:free",
    messages: [{ "role": "user", "content": "Hello world" }]
  });
  console.log(completion.choices[0].message);
}

main();`;

    function copyToClipboard() {
        navigator.clipboard.writeText(clientCode);
        copied = true;
        setTimeout(() => copied = false, 2000);
    }
</script>

<div class="layout">
    <aside class="sidebar">
        <div class="brand">
            <i class="fa-solid fa-server"></i>
            <span>API Docs</span>
        </div>
        
        <nav>
            <div class="section-title">Endpoints</div>
            
            <button class:active={activeTab === 'GET'} on:click={() => activeTab = 'GET'}>
                <span class="method get">GET</span>
                <span>Health Check</span>
            </button>
            
            <button class:active={activeTab === 'POST'} on:click={() => activeTab = 'POST'}>
                <span class="method post">POST</span>
                <span>Completions</span>
            </button>
        </nav>
    </aside>

    <main class="content">
        {#if activeTab === 'POST'}
            <header>
                <h1><i class="fa-regular fa-comments"></i> Chat Completions</h1>
                <p>OpenAI-compatible endpoint for chat interactions via OpenRouter.</p>
            </header>

            <div class="card">
                <div class="url-bar">
                    <span class="method-badge post">POST</span>
                    <code class="url">{baseUrl}/v1/chat/completions</code>
                </div>
            </div>

            <div class="card code-section">
                <div class="code-header">
                    <span><i class="fa-brands fa-js"></i> Node.js Example</span>
                    <button class="copy-btn" on:click={copyToClipboard}>
                        <i class="fa-regular {copied ? 'fa-circle-check' : 'fa-copy'}"></i>
                        {copied ? 'Copied' : 'Copy'}
                    </button>
                </div>
                <pre><code>{clientCode}</code></pre>
            </div>

        {:else}
            <header>
                <h1><i class="fa-solid fa-heart-pulse"></i> Health Check</h1>
                <p>Verify API status and connectivity.</p>
            </header>

            <div class="card">
                <div class="url-bar">
                    <span class="method-badge get">GET</span>
                    <code class="url">{baseUrl}/</code>
                </div>
            </div>
            
            <div class="card">
                <h3>Response</h3>
                <pre><code>Status: 200 OK</code></pre>
            </div>
        {/if}
    </main>
</div>

<style>
    .layout { display: flex; min-height: 100vh; }
    
    .sidebar {
        width: 280px;
        background: var(--bg-secondary);
        border-right: 1px solid var(--border);
        padding: 24px;
        display: flex;
        flex-direction: column;
    }

    .brand {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--text-primary);
    }

    .section-title {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-secondary);
        margin-bottom: 12px;
        font-weight: 600;
    }

    nav button {
        width: 100%;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        padding: 10px 12px;
        margin-bottom: 4px;
        border-radius: 6px;
        cursor: pointer;
        color: var(--text-secondary);
        font-family: inherit;
        font-size: 0.95rem;
        transition: all 0.2s;
    }

    nav button:hover { background: rgba(255,255,255,0.05); color: var(--text-primary); }
    nav button.active { background: rgba(56, 189, 248, 0.1); color: var(--accent); }

    .method {
        font-size: 0.7rem;
        font-weight: 700;
        padding: 2px 6px;
        border-radius: 4px;
        margin-right: 12px;
        min-width: 45px;
        text-align: center;
    }

    .method.get { color: var(--method-get); background: rgba(14, 165, 233, 0.1); }
    .method.post { color: var(--method-post); background: rgba(16, 185, 129, 0.1); }

    .content { flex: 1; padding: 60px; max-width: 1000px; }
    
    header { margin-bottom: 40px; }
    h1 { margin: 0 0 10px 0; font-size: 2rem; display: flex; align-items: center; gap: 16px; }
    header p { color: var(--text-secondary); margin: 0; font-size: 1.1rem; }

    .card {
        background: var(--bg-secondary);
        border: 1px solid var(--border);
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 24px;
    }

    .url-bar {
        padding: 20px;
        display: flex;
        align-items: center;
        font-family: 'Fira Code', monospace;
    }

    .method-badge {
        font-weight: bold;
        padding: 6px 12px;
        border-radius: 6px;
        margin-right: 16px;
        font-size: 0.9rem;
        color: #fff;
    }

    .method-badge.post { background: var(--method-post); }
    .method-badge.get { background: var(--method-get); }
    
    .url { color: var(--text-primary); }

    .code-section { border: 1px solid var(--border); }
    
    .code-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 20px;
        border-bottom: 1px solid var(--border);
        background: rgba(0,0,0,0.2);
        color: var(--text-secondary);
        font-size: 0.9rem;
    }

    .copy-btn {
        background: transparent;
        border: 1px solid var(--border);
        color: var(--text-primary);
        padding: 6px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.2s;
    }

    .copy-btn:hover { background: var(--border); }

    pre {
        margin: 0;
        padding: 24px;
        overflow-x: auto;
        font-family: 'Fira Code', monospace;
        font-size: 0.9rem;
        line-height: 1.6;
        color: #e2e8f0;
    }
</style>