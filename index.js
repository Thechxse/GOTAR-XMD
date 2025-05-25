
```js
const { WAConnection, MessageType, Mimetype } = require('@adiwajshing/baileys');
const express = require('express');
const app = express();
const port = 9090;

// WhatsApp number of the owner
const ownerNumber = '18494967948@s.whatsapp.net'; 

async function startBot() {
    const sock = new WAConnection();
    sock.on('open', () => {
        console.log('GOTAR XMD connected ✅');
        sock.sendMessage(ownerNumber, { text: 'GOTAR XMD connected ✅' }); // Send message when connected
        sock.sendMessage(ownerNumber, { text: `╭━━〔 *GOTAR-XMD* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *Here is the owner details*
┃◈┃• *Name* - Gotar-tech
┃◈┃• *Number* - 8494967948
┃◈┃• *Version*: 1.0.0 Beta
┃◈└───────────┈⊷
╰──────────────┈⊷` });  // Send owner details message
    });

    sock.on('chat-update', async (chatUpdate) => {
        if (chatUpdate.messages) {
            const message = chatUpdate.messages[0];
            const sender = message.key.remoteJid;
