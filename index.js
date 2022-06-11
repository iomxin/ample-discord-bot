const {Intents,Client} = require('discord.js')
const dotenv = require('dotenv')
const utf8 = require('utf8')

dotenv.config()

const client = new Client(
    {
       intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
       ]
    }
)

client.on('ready',()=>{
    console.log('GUNDAM AMPLE is Ready !!!')
})
client.on('messageCreate',msg=>{
    if (msg.content == 'ปอนหน้าหี'){
        msg.reply('ใช่แล้ว !! หน้าหีมาก')
    }
    if (msg.content == 'ออมสิน'){
        msg.reply('คนนี้หล่อมาก')
    }
})

client.login(process.env.tokenid)