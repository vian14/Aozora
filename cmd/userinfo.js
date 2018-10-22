const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  let memberInfo = msg.mentions.members.first();

  if(!memberInfo){
    var userinfo = new Discord.RichEmbed()
        .setAuthor("User info")
        .addField("**Username: **", `${msg.author.username}#${msg.author.discriminator}` + "\n" )
        .addField("**ID: **",msg.author.id + "\n" )
        .addField("**Created At: **", msg.author.createdAt)
        .setColor("RANDOM")

        .setThumbnail(msg.author.avatarURL)

        msg.channel.send(userinfo);

  }else{

    var userinfoo = new Discord.RichEmbed()
        .setAuthor("User info")
        .addField("**Username: **", `${memberInfo.user.username}#${memberInfo.user.discriminator}` + "\n" )
        .addField("**ID: **", memberInfo.id + "\n" )
        .addField("**Created At: **", memberInfo.user.createdAt)
        .setColor("RANDOM")

        .setThumbnail(memberInfo.user.avatarURL)

        msg.channel.send(userinfoo);
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info'],
  permLevel: 0
};

exports.help = {
  name: "userinfo",
  description: "Get the mentioned persons info",
  usage: "userinfo [@MENTION]"
};
