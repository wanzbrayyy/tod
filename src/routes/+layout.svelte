<svelte:head>
    <title>REST API Documentation</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Fira+Code:wght@400&display=swap" rel="stylesheet">
</svelte:head>

<slot />

<style :global>
    :root {
        --bg-primary: #0f172a;
        --bg-secondary: #1e293b;
        --text-primary: #f8fafc;
        --text-secondary: #94a3b8;
        --accent: #38bdf8;
        --border: #334155;
        --method-get: #0ea5e9;
        --method-post: #10b981;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        background-color: var(--bg-primary);
        color: var(--text-primary);
        -webkit-font-smoothing: antialiased;
    }

    * { box-sizing: border-box; }
</style>