exports.run = (bot, msg, params) => {

  msg.channel.send(msg.author.toString() + 'Your ping is `' + `${Date.now() - msg.createdTimestamp}` + ' ms`');

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ping",
  description: "Get a speed ping response",
  usage: "ping"
};
