const Discord = require("discord.js")

module.exports = {
    name: "isgay",
    aliases: ["Isgay", "ISGAY", " isgay", " Isgay", " ISGAY"],
    run: async (client, message, args) => {
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
        const gay = Math.random() * 100;
        const gayIndex = Math.floor(gay / 0);
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`🏳️‍🌈 Gay Machine 2020 🏳️‍🌈`)
            .setDescription(`${member.user.username} é ${Math.floor(gay)}% gay.`)
        message.channel.send(embed);
    }
}