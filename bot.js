const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '$'


  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`#Stars The Best. https://discord.gg/2Qztvk8`,"http://twitch.tv/S-F")
  
  



client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "!say") {

if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("*لا تملك الصلاحيات المطلوبه**");

message.channel.send(args.join("  "))

    message.delete();

  }

});





 

client.on("guildMemberAdd", member => {

  member.createDM().then(function (channel) {

  return channel.send(` 

**

تعال في حضني تكفى 💛💛💛💛👠
                              https://discord.gg/2Qztvk8

الدعووة خاصة لك ... [ ${member}  ]

**`) 

}).catch(console.error)

})

client.login(process.env.BOT_TOKEN)
