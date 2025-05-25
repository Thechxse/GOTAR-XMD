```js
const githubRepo = 'https://github.com/GOTAR-XMD/GOTAR-XMD';

// Check update status
let updateMessage = '✅ Your GOTAR–XMD is up-to-date!';
if (localVersion !== latestVersion) {
  updateMessage = `🚀 Your GOTAR–XMD out of date!
🔹 *Current Version:* localVersion
🔹 *Latest Version:*{latestVersion}
Use *.update* to update.`;
}

const statusMessage = `🌟 *Good new Date().toLocaleTimeString()*
📌 *Bot Name:* GOTAR–XMD
📌 *Current Version:*{localVersion}
🖥️ *System Info:*
⏱️ *Uptime:* uptime
🧾 *Changelog:*{latestChangelog}
⭐ *GitHub Repo:* githubRepo
👤 *Owner:*{ownerName}`;

// Send the status message with an image
try {
  await conn.sendMessage(from, {
    image: { url: 'https://files.catbox.moe/82bk4s.jpg' },
    caption: statusMessage,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363401658098220@newsletter',
        newsletterName: 'GOTAR–XMD',
        serverMessageId: 143
      }
    }
  }, { quoted: mek });
} catch (error) {
  console.error('Error fetching version info:', error);
  reply('❌ An error occurred while checking the update.');
}
```
