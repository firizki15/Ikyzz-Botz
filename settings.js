const fs = require('fs')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'FW7yTqpWybg73Pu', // ISI APIKEY LU
}

global.namabot = "ɪᴋʏz-Botz𐂃" // UBAH JADI NAMA LU
global.namaowner = "𝕱𝖗𝖟𝖐𝖞𝖞𝕺𝖋𝖋𝖈Ⓕ︎" // NAMA OWNER
global.footer_text = "© ɪᴋʏz-Botz𐂃" // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6283150755209'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.fakelink = "https://instagram.com/xymon0_0?igshid=ZGUzMzM3NWJiOQ==" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://chat.whatsapp.com/HqgsoOkp7rQEUcF1gjxfIE`) // GANTI LINK GRUB BOT LU \\
// -- \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = true // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS
global.autoblok212 = true // BEBAS
global.autoread = true // BEBAS
global.autorespon = false // BEBAS
global.onlyprem = false // BEBAS
global.onlygrub = false // BEBAS
global.onlypc = false // BEBAS
// - \\
// PEMISAH \\
global.packname = '© ɪᴋʏz-Botz𐂃' //sticker wm ubah
global.author = '𝕱𝖗𝖟𝖐𝖞𝖞𝕺𝖋𝖋𝖈Ⓕ︎' //sticker wm ganti nama kalian

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})