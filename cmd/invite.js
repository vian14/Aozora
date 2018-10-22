const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .addField("__**" + "INVITE LINK: " + "**__", "https://discord.gg/9sU8d7w", true)
          .addField("__**" + "Bot Invite Link: " + "**__", "https://discordapp.com/oauth2/authorize?client_id=447617398384754716&permissions=8&scope=bot", false)


          .setColor("RANDOM")

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "invite",
  description: "Get the invite link for help server",
  usage: "invite"
};
