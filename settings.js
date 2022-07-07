const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6285640068416','6285640068416','6285640068416','6285640068416']
global.premium = ['6285640068416','6285640068416','6287721317870']
global.rkyt = ['6285640068416','6285640068416']
global.packname = ''
global.author = 'Wa : 085640068416\nYT : Ga pnya\nIG : achyrr_wann\nGH : wannofc\nTT : Ga pnya'
global.sessionName = 'session'
global.namabotnya = 'Wann'
global.namaownernya = 'Wann'
global.dapkey = 'Kirbotz123'
global.lolkey = 'Atakbotz'
global.zenzkey = 'sanzychan01'
global.wame = 'https://wa.me/6285640068416'
global.gcwann = 'https://chat.whatsapp.com/Hq6tAL2w3dqGgOrs'
global.ownerNumber = ["6285640068416@s.whatsapp.net","6285640068416@s.whatsapp.net"]
global.email = 'wannofc313@gmail.com'
global.yt = 'gaada ytb banj :)'
global.webatak = 'blm buat ngab'
global.githubatak = 'https://github.com/'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.antitags = true
global.autobio = false
global.mess = {
    success: 'Success 💯',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Kak Silahkan Chat Owner',
   wait: '❗Sedang Memproses...',
    noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
    wrongFormat: 'Format salah, coba liat lagi di menu',
}


global.limitawal = {
    premium: "Infinity",
    free: 5
}


global.thumb = fs.readFileSync('./Image/atakbotz.jpg')
global.thumbdm = fs.readFileSync('./Image/diamond.jpg')
global.thumbrpg = fs.readFileSync('./Image/atakbotzrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./Image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Image/mining.jpg')
global.sticknya = fs.readFileSync('./Atak/JANGANDIUBAH/fuck.webp')
global.sticknya = fs.readFileSync('./Atak/JANGANDIUBAH/wait.webp') 

global.imgdevil = fs.readFileSync('./Image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
