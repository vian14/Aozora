const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  let botInfo = msg.mentions.bot;

  if(!botInfo){
    let botembed = new Discord.RichEmbed()
    .setAuthor("Bot Info")
    .setColor("RANDOM")
    .addField("Bot Name", bot.user.username)
    .addField("Prefix", "a.")
    .addField("Created by", "TheSpiel14")

        .setThumbnail(bot.user.displayAvatarURL)

        msg.channel.send(botembed);

  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info'],
  permLevel: 0
};

exports.help = {
  name: "botinfo",
  description: "Get the mentioned bot info",
  usage: "botinfo"
};
