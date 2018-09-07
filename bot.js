const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.'

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`Great.`,"http://twitch.tv/S-F")

  console.log('')

  console.log('')

  console.log('╔[═════════════════════════════════════════════════════════════════]╗')

  console.log(`[Start] ${new Date()}`);

  console.log('╚[═════════════════════════════════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════════════════════════════]╗');

  console.log(`Logged in as * [ " ${client.user.username} " ]`);

  console.log('')

  console.log('Informations :')

  console.log('')

  console.log(`servers! [ " ${client.guilds.size} " ]`);

  console.log(`Users! [ " ${client.users.size} " ]`);

  console.log(`channels! [ " ${client.channels.size} " ]`);

  console.log('╚[════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════]╗')

  console.log(' Bot Is Online')

  console.log('╚[════════════]╝')

  console.log('')

  console.log('')

});












  

  const Discord = require("discord.js");

const client = new Discord.Client();

client.on('message', message => {

if (message.content === 'سوي سبام') {

      let count = 0;

      let ecount = 0;

      for(let x = 0; x < 90000; x++) {

        message.channel.send(`سباام يولد يلعن اومم الفله ${x}`)

          .then(m => {

            count++;

          })

          

        }

      }

});


  

 



 














client.login(process.env.BOT_TOKEN); 
