const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  let serverInfo = msg.mentions.guild;

  if(!serverInfo){
    var serverinfo = new Discord.RichEmbed()
    .setAuthor("Server Info")
    .setColor("RANDOM")
    .addField("Server Name", msg.guild.name)
    .addField("Created", msg.guild.createdAt)
    .addField("You Already Join", msg.member.joinedAt)
    .addField("Owner", msg.guild.owner)

        .setThumbnail(msg.guild.iconURL)

        msg.channel.send(serverinfo);

  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['server'],
  permLevel: 0
};

exports.help = {
  name: "serverinfo",
  description: "Get the mentioned server info",
  usage: "serverinfo"
};
