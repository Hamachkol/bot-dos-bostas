const TicTacToe = require('discord-tictactoe');
const config = require("../../config.json")
const db = require("quick.db")

module.exports = {
    name: "tic-tac-toe",
    description: "Jogas o jogo do galo contra o Bot ou contra outra pessoa",
    clientPermissions: ["SEND_MESSAGES", "ADD_REACTIONS", "MANAGE_MESSAGES"],
    userPermissions: [],
    run: async (client, message, args) => {
        let prefix = db.get(`prefix_${message.guild.id}`)
    	if(prefix === null) prefix = config.prefix;
        new TicTacToe({
            language: 'pt-br',
            command: `${prefix}tic-tac-toe`,
        }, client);
    }
}