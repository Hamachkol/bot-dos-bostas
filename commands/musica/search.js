const Discord = require("discord.js")

module.exports = {
    name: "search",
    aliases: ["sr"],
    run: async (client, message, args) => {
        if (!message.member.voice.channelID) {
            message.react(":X:748632517476745226")
            const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`Precisas de estar num voice chat para resumires música!`)
            return message.channel.send(embed).then(msg => {
                msg.delete({ timeout: 25000 })
            })
        }
        if (!args.join(" ")) {
            message.react(":X:748632517476745226")
            message.channel.send("<:X:748632517476745226> | Diz-me alguma coisa para eu procurar!")
        }
        let userVoiceChannel = message.member.voice.channel;
        let clientVoiceConnection = message.guild.me.voice;
        if (userVoiceChannel === clientVoiceConnection.channel || userVoiceChannel && !clientVoiceConnection.channel) {
            try {
                client.distube.play(message, args.join(" "))
            } catch (e) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL())
                    .setTitle(`<:X:748632517476745226> Ocorreu um erro`)
                    .setDescription("```\n" + "Ocorreu um erro: " + e + "```")
                	.setColor("RANDOM")
                	.setFooter(`Pedido por(a): ${message.member.user.username}`, message.member.user.displayAvatarURL())
                	.setTimestamp()
            	message.channel.send(embed)
            }
            if(!args.join(" ")) {
                return;
            } else {
                const playembed = new Discord.MessageEmbed()
            	    .setDescription(`<:youtube1:748576732642148472> A procurar no Youtube: **${args.join(" ")}.**`)
            	    .setColor("RANDOM")
        	    message.channel.send(playembed).then(msg1 => {
            	    client.distube.on("playSong", (message, queue, song) => {
                	    playembed.setDescription(`<:youtube1:748576732642148472> Encontrado no Youtube: **[${queue.songs[0].name}](${queue.songs[0].url})**`)
                	    msg1.edit(playembed)
            	    })
            	    client.distube.on("addSong", (message, queue, song) => {
                	    playembed.setDescription(`<:youtube1:748576732642148472> Adicionado ao queue: **[${song.name}](${song.url})**`)
                	    msg1.edit(playembed)
            	    })
                })
            }
            } else {
                message.channel.send('<:X:748632517476745226> Só podes usar esse comando se estiveres no mesmo voice channel do Bot!');
        }
    }
}