const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

//GENEL KOMUTU
    if(args[0] === "Genel" || args[0] === "genel" || args[0] === "General" || args[0] === "general") {
              let Genel = new Discord.MessageEmbed()
  .setAuthor('Genel', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/api/oauth2/authorize?client_id=917818360551600188&permissions=8&scope=bot)` + "** | **" + `[Destek Sunucusu](https://discord.perfolive.ml)`  + "** | **" + `[Twitch](https://twitch.tv/perfonline)`  + "** | **" + `[Web Sitesi](https://perfolive.ml/)  `, false)
              return message.channel.send(Genel)
         
       
       return;
    }
    //SUNUCU KOMUTU
      if(args[0] === "Sunucu" || args[0] === "sunucu") {
              let Sunucu = new Discord.MessageEmbed()
  .setAuthor('Sunucu', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sunucu').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/api/oauth2/authorize?client_id=917818360551600188&permissions=8&scope=bot)` + "** | **" + `[Destek Sunucusu](https://discord.perfolive.ml)`  + "** | **" + `[Twitch](https://twitch.tv/perfonline)`  + "** | **" + `[Web Sitesi](https://perfolive.ml/)  `, false)
              return message.channel.send(Sunucu)
         
      

       return;
    }
//EĞLENCE KOMUTU
  if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
   let Eğlence = new Discord.MessageEmbed()
  .setAuthor('Eğlence', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/api/oauth2/authorize?client_id=917818360551600188&permissions=8&scope=bot)` + "** | **" + `[Destek Sunucusu](https://discord.perfolive.ml)`  + "** | **" + `[Twitch](https://twitch.tv/perfonline)`  + "** | **" + `[Web Sitesi](https://perfolive.ml/)  `, false)
   return message.channel.send(Eğlence)
  
      
           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasyon" || args[0] === "moderasyon" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasyon = new Discord.MessageEmbed()
  .setAuthor('Moderasyon', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/api/oauth2/authorize?client_id=917818360551600188&permissions=8&scope=bot)` + "** | **" + `[Destek Sunucusu](https://discord.perfolive.ml)`  + "** | **" + `[Twitch](https://twitch.tv/perfonline)`  + "** | **" + `[Web Sitesi](https://perfolive.ml/)  `, false)
   return message.channel.send(Moderasyon)
             
       
               return;
  }
//MÜZİK KOMUTU
  if(args[0] === "Music" || args[0] === "music" || args[0] === "Müzik" || args[0] === "müzik") {
   let Müzik = new Discord.MessageEmbed()
  .setAuthor('Müzik', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(`:white_small_square: - **${prefix}oynat** ` + "Odaya çağırır ve şarkıyı oynatmaya başlar. \n" +
   `:white_small_square: - **${prefix}gec** ` + "Çalan şarkıyı geçip sıradakini oynatmaya başlar. \n" +
   `:white_small_square: - **${prefix}dur** ` + "Çalan şarkıyı ve sırayı kapatır."
   )
        .addField("» Linkler", ` [Davet Et](https://discord.com/api/oauth2/authorize?client_id=917818360551600188&permissions=8&scope=bot)` + "** | **" + `[Destek Sunucusu](https://discord.perfolive.ml)`  + "** | **" + `[Twitch](https://twitch.tv/perfonline)`  + "** | **" + `[Web Sitesi](https://perfolive.ml/)  `, false)
   return message.channel.send(Müzik)
             
       
               return;
  }
//YARDIM KOMUTU
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('Yardım Komutları', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#FFFB05')
  .setDescription(`**Örnek Kullanım:** \`${prefix}yardım Kategori\``)
  .addField('Kategoriler:', `
  **[${prefix}yardım Genel](/)** 
  **[${prefix}yardım Eğlence](/)**
  **[${prefix}yardım Moderasyon](/)**
  **[${prefix}yardım Sunucu](/)**
  **[${prefix}yardım Müzik](/)**
  `)
  .addField("» Linkler", ` [Davet Et](https://discord.com/api/oauth2/authorize?client_id=917818360551600188&permissions=8&scope=bot)` + "** | **" + `[Destek Sunucusu](https://discord.perfolive.ml)`  + "** | **" + `[Twitch](https://twitch.tv/perfonline)`  + "** | **" + `[Web Sitesi](https://perfolive.ml/)  `, false)

  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    
//EMİRHAN SARAÇ TARAFINDAN YAPILMIŞTIR 2021 DE YENİLENMİŞTİR!

  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y'], //Komutun farklı yazılışlarla kullanımları
    permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)
    kategori: "Genel" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız

  };

  exports.help = {
    name: 'yardım',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Komutlar hakkında bilgi verir.', //Komutun açıklaması
    usage: 'yardım', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };
