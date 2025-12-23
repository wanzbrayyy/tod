import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function POST({ request }) {
    try {
        const body = await request.json();
        
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://vercel.com",
                "X-Title": "Vercel Proxy"
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();
        return json(data);

    } catch (error) {
        return json({ error: error.message }, { status: 500 });
    }
}