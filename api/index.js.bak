const TelegramBot = require('node-telegram-bot-api');

// KONFIGURASI
const TOKEN = '8277826531:AAHE7hJRuPSoDhdQ1CDB_ce0riZIxSYirhE';
const OPENROUTER_API_KEY = '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';
const MODEL_NAME = "nex-agi/deepseek-v3.1-nex-n1:free";

const bot = new TelegramBot(TOKEN);

// SYSTEM PROMPT PERSONA
const SYSTEM_PROMPT = `
Identity: Kamu adalah 'wanzbrayyy truth', bot host Truth or Dare yang asik, tengil, dan gaul.
Language: Indonesia gaul (lo-gue).
Task: Berikan pertanyaan Truth atau tantangan Dare yang menantang.
Output Format: Plain text singkat. Jangan pakai markdown formatting di teks, nanti bot yang bungkus.
`;

const keyboardMarkup = {
    inline_keyboard: [
        [
            { text: "🔥 Truth", callback_data: "action_truth" },
            { text: "😈 Dare", callback_data: "action_dare" }
        ],
        [
            { text: "🎲 Random Mode", callback_data: "action_random" }
        ],
        [
            { text: "💬 Chat Host", callback_data: "action_chat" }
        ]
    ]
};

// FUNGSI API (PENGGANTI LIBRARY OPENAI)
// Ini murni menggunakan fetch sesuai curl yang Anda kirim
async function fetchOpenRouter(userContent) {
    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: MODEL_NAME,
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: userContent }
                ]
            })
        });

        const data = await response.json();
        
        if (data.choices && data.choices.length > 0) {
            return data.choices[0].message.content;
        } else {
            console.error("API Response Error:", data);
            return "Waduh, API-nya lagi ngelag bray. Coba lagi!";
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        return "Otak gue putus koneksi bray. Coba lagi!";
    }
}

// FORMATTER (KUTIP & MARKDOWN V2)
function formatMsg(text) {
    // Membungkus teks dengan ``` (code block) agar rapi dan style kutip
    return "```\n" + text + "\n```";
}

// LOGIC UTAMA (VERCEL HANDLER)
module.exports = async (req, res) => {
    try {
        const body = req.body;

        // 1. COMMAND START
        if (body.message && body.message.text === '/start') {
            const chatId = body.message.chat.id;
            const welcome = "Woy bray! Gue wanzbrayyy truth.\nSiap main Truth or Dare? Pilih nasib lo di bawah!";
            
            await bot.sendMessage(chatId, formatMsg(welcome), {
                parse_mode: 'MarkdownV2',
                reply_markup: keyboardMarkup
            });
        }
        
        // 2. CHAT BIASA (AI RESPONSE)
        else if (body.message && body.message.text && !body.message.text.startsWith('/')) {
            const chatId = body.message.chat.id;
            await bot.sendChatAction(chatId, 'typing');
            
            const aiResponse = await fetchOpenRouter(body.message.text);
            
            await bot.sendMessage(chatId, formatMsg(aiResponse), {
                parse_mode: 'MarkdownV2',
                reply_markup: keyboardMarkup
            });
        }

        // 3. CALLBACK QUERY (TOMBOL)
        else if (body.callback_query) {
            const queryId = body.callback_query.id;
            const chatId = body.callback_query.message.chat.id;
            const messageId = body.callback_query.message.message_id;
            const data = body.callback_query.data;

            await bot.answerCallbackQuery(queryId, { text: 'Bentar bray...' });

            let prompt = "";
            if (data === 'action_truth') prompt = "Kasih pertanyaan Truth yang jujur, pedes, atau rahasia.";
            if (data === 'action_dare') prompt = "Kasih tantangan Dare yang gila, fisik, atau malu-maluin.";
            if (data === 'action_random') prompt = "Pilih acak Truth atau Dare dan kasih tantangannya.";
            
            if (data === 'action_chat') {
                 await bot.sendMessage(chatId, formatMsg("Ketik aja curhatan lo atau apa gitu, ntar gue bales bray!"), {
                    parse_mode: 'MarkdownV2'
                });
            } else if (prompt) {
                const aiResponse = await fetchOpenRouter(prompt);
                
                // Edit pesan lama dengan respon baru
                try {
                    await bot.editMessageText(formatMsg(aiResponse), {
                        chat_id: chatId,
                        message_id: messageId,
                        parse_mode: 'MarkdownV2',
                        reply_markup: keyboardMarkup
                    });
                } catch (e) {
                    // Jika gagal edit (misal pesan sama), kirim baru
                    await bot.sendMessage(chatId, formatMsg(aiResponse), {
                        parse_mode: 'MarkdownV2',
                        reply_markup: keyboardMarkup
                    });
                }
            }
        }

        res.status(200).send('OK');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
};