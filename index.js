// Obfuscation ඉවත් කළ පසු ලැබෙන සැබෑ කේතයේ ආකෘතිය (Deobfuscated Logic)

async function onMessageEdit(ctx) {
    const chatName = ctx.chat.title || "Private Chat";
    const sender = ctx.from.username || "Unknown";
    const sentTime = ctx.message.date; // ලැබුණු වෙලාව
    const currentDate = new Date().toLocaleDateString();
    const editedBy = ctx.editedMessage.from.username || "Unknown";
    
    const originalMessage = ctx.oldMessage.text; // පැරණි මැසේජ් එක
    const editedMessage = ctx.editedMessage.text;   // අලුත් මැසේජ් එක

    // පරිශීලකයාට පෙන්වන අවසාන Log සටහන (Template)
    const logTemplate = `
📌 Chat: ${chatName}
👤 Sent By: @${sender}
🕒 Sent At: ${sentTime}
📅 Date: ${currentDate}
✏️ Edited By: @${editedBy}

*Original:* ${originalMessage}
*Edited To:* ${editedMessage}
    `;

    // සකස් කරගත් සටහන ආරක්ෂිතව සර්වර් එකට හෝ වෙනත් චැට් එකකට යැවීම
    if (ctx.isGroup) {
        await bot.sendMessage(logChannelId, logTemplate);
    } else {
        await bot.sendMessage(adminId, logTemplate);
    }
}
