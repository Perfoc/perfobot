const Discord = require('discord.js');

const cevaplar = [
    "Kesinlikle Gaysin!",
    "Sen Gay Olamazsın!",
    "Bilemedim, tekrar sor."
];

exports.run = function(client, message, args) {
    var soru = args.join('Gay miyim?');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0,
  kategori: 'Eğlence'
};

exports.help = {
  name: 'gaymiyim', 
  description: 'Gay olup olmadığınızı söyler.',
  usage: 'gaymiyim'
};
