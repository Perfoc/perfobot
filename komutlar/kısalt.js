const Discord = require('discord.js');
const shorten = require('isgd');

exports.run = (client, message, args, tools) => {
    message.delete();
    if (!args[0]) return message.channel.send(' ``` \n » Kullanım: ?kısalt <URL> <isim> \n » Örnek: .kısalt http://google.com Google\n ``` ')

    if(!args[1]) {

        shorten.shorten(args[0], function(res) {
            if (res.startsWith('Hata:')) message.channel.send('**Lütfen Doru URL Girin**');

            message.channel.send(`**<${res}>**`);
        })
    } else {
        shorten.custom(args[0], args[1], function(res) {

            if (res.startsWith('Hata:')) message.channel.send(`**<${res}>**`);

            message.channel.send(`**<${res}>**`);
        })
    }

};


exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
name: 'kısalt',
description: 'İstediğiniz URLni Kısaltır. ',
usage: 'kısalt'
};