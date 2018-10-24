const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '$'

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`#Stars The Best. https://discord.gg/2Qztvk8`,"http://twitch.tv/S-F")
  
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







 

A7MD.on("guildMemberAdd", member => {

  member.createDM().then(function (channel) {

  return channel.send(` 

**

سلام عليكم 

تعال في حضني تكفى 💛💛💛💛👠
                               [ https://discord.gg/2Qztvk8 ] 

الدعووة خاصة لك ... [ ${member}  ]

**`) 

}).catch(console.error)

})

client.login(process.env.BOT_TOKEN)
