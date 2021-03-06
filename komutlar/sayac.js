const Discord = require('discord.js')
const db = require('quick.db')
const fs = require('fs')

exports.run = async (client, message, args) => {
	if(!args[0]) {
		const embed = new Discord.MessageEmbed()
			.setDescription(`Lütfen bir sayı yazın!`)
			.setColor("RED")
			.setTimestamp()
		message.channel.send({embed})
		return
  }

	let profil = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send("kanal seç");


	if(args[0] === "sıfırla") {
		if(!profil[message.guild.id]) {
			const embed = new Discord.MessageEmbed()
				.setDescription(`Ayarlanmayan şeyi sıfırlayamazsın!`)
				.setColor("RANDOM")
				.setTimestamp()
			message.channel.send({embed})
			return
		}
		delete profil[message.guild.id]
		fs.writeFile("./sayac.json", JSON.stringify(profil), (err) => {
			console.log(err)
		})
		const embed = new Discord.MessageEmbed()
			.setDescription(`Sayaç başarıyla sıfırlandı!`)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(isNaN(args[0])) {
		const embed = new Discord.MessageEmbed()
			.setDescription(`Lütfen bir sayı yazın!`)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(args[0] <= message.guild.memberCount) {
		const embed = new Discord.MessageEmbed()
			.setDescription(`Lütfen sunucu sayısından [${message.guild.memberCount}] daha yüksek bir değer girin!`)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(!profil[message.guild.id]){
		profil[message.guild.id] = {
			sayi: args[0],
      kanal: mentionedChannel.id
		};
	}

	profil[message.guild.id].sayi = args[0]
  profil[message.guild.id].kanal = mentionedChannel.id

	fs.writeFile("./sayac.json", JSON.stringify(profil), (err) => {
		console.log(err)
	})

	const embed = new Discord.MessageEmbed()
		.setDescription(`Sayaç başarıyla ${args[0]} olarak ayarlandı!\nSayaç kanalı başarıyla ${mentionedChannel} olarak ayarlandı`)
		.setColor("RANDOM")
		.setTimestamp()
	message.channel.send({embed})
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['sayacayarla', 'sayac', 'sayaç'],
	permLevel: 2,
  kategori: 'Sunucu'
}

exports.help = {
	name: 'Sayaç',
	description: 'Sayacı ayarlar.',
	usage: 'sayaç [sayı/sıfırla] [kanal]'
}
