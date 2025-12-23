const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '8277826531:AAHE7hJRuPSoDhdQ1CDB_ce0riZIxSYirhE';
const OPENROUTER_API_KEY = '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';
const MODEL_NAME = "nex-agi/deepseek-v3.1-nex-n1:free";

const bot = new TelegramBot(TOKEN, { polling: false });

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
        return data.choices?.[0]?.message?.content || "Lagi error nih, coba lagi bray!";
    } catch (error) {
        console.error("AI Error:", error);
        return "Otak gue putus koneksi bray. Coba lagi!";
    }
}

function formatMsg(text) {
    return "```\n" + text + "\n```";
}

module.exports = async (req, res) => {
    try {
        // 1. CEK KONEKSI (GET REQUEST)
        if (req.method === 'GET') {
            return res.status(200).send('Bot is Online! Wanzbrayyy is ready.');
        }

        // 2. FORCE PARSING JSON (Kunci Perbaikan)
        // Kadang Vercel membaca body sebagai string, kita harus ubah ke Object manual
        let body = req.body;
        if (typeof body === 'string') {
            try {
                body = JSON.parse(body);
            } catch (e) {
                console.error("JSON Parse Error:", e);
                return res.status(400).send("Invalid JSON");
            }
        }

        // Jika body kosong, abaikan
        if (!body) return res.status(200).send('No Body');

        // 3. LOGIC HANDLER
        
        // --- COMMAND /START ---
        if (body.message && body.message.text === '/start') {
            const chatId = body.message.chat.id;
            const welcome = "Woy bray! Gue wanzbrayyy truth.\nSiap main Truth or Dare? Pilih nasib lo di bawah!";
            
            await bot.sendMessage(chatId, formatMsg(welcome), {
                parse_mode: 'MarkdownV2',
                reply_markup: keyboardMarkup
            });
        }
        
        // --- CHAT BIASA ---
        else if (body.message && body.message.text && !body.message.text.startsWith('/')) {
            const chatId = body.message.chat.id;
            await bot.sendChatAction(chatId, 'typing');
            
            const aiResponse = await fetchOpenRouter(body.message.text);
            
            await bot.sendMessage(chatId, formatMsg(aiResponse), {
                parse_mode: 'MarkdownV2',
                reply_markup: keyboardMarkup
            });
        }

        // --- CALLBACK BUTTON ---
        else if (body.callback_query) {
            const queryId = body.callback_query.id;
            const chatId = body.callback_query.message.chat.id;
            const messageId = body.callback_query.message.message_id;
            const data = body.callback_query.data;

            // Jawab callback supaya loading ilang
            try {
                await bot.answerCallbackQuery(queryId, { text: 'Sabar bray...' });
            } catch (e) {}

            let prompt = "";
            if (data === 'action_truth') prompt = "Kasih pertanyaan Truth yang jujur, pedes, atau rahasia.";
            if (data === 'action_dare') prompt = "Kasih tantangan Dare yang gila, fisik, atau malu-maluin.";
            if (data === 'action_random') prompt = "Pilih acak Truth atau Dare dan kasih tantangannya.";
            
            if (data === 'action_chat') {
                 await bot.sendMessage(chatId, formatMsg("Ketik aja curhatan lo, ntar gue bales bray!"), {
                    parse_mode: 'MarkdownV2'
                });
            } else if (prompt) {
                const aiResponse = await fetchOpenRouter(prompt);
                
                try {
                    await bot.editMessageText(formatMsg(aiResponse), {
                        chat_id: chatId,
                        message_id: messageId,
                        parse_mode: 'MarkdownV2',
                        reply_markup: keyboardMarkup
                    });
                } catch (e) {
                    await bot.sendMessage(chatId, formatMsg(aiResponse), {
                        parse_mode: 'MarkdownV2',
                        reply_markup: keyboardMarkup
                    });
                }
            }
        }

        return res.status(200).send('OK');

    } catch (error) {
        console.error("Handler Error:", error);
        return res.status(500).send('Internal Server Error');
    }
};