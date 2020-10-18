const fetch = require("node-fetch")

module.exports = {
    name: "clyde",
    aliases: ["Clyde", "CLYDE", " clyde", " Clyde", " CLYDE"],
    run: async (client, message, args) => {
        const text = args.join(" ");
        if (!text) return message.channel.send("<:X:748632517476745226> Por favor especifica algum texto!");
        const sendMsg = await message.channel.send("⚙ A processar imagem...");
        const data = await fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`).then((res) =>
            res.json()
        );
        sendMsg.delete();
        message.channel.send(data.message);
    }
}