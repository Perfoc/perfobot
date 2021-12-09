const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setImage(message.author.displayAvatarURL({ format: 'png', size: 256}))

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['avatarım'],
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'avatar', 
  description: 'Avatarınızı gösterir',
  usage: 'avatar'
};