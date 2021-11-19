const { Message } = require("discord.js");

module.exports = {
	category: "Moderation",
	description: "Kick a user from the server",
	permisson: ["ADMINISTRATOR"],
	slash: true,
	minArgs: 2,
	expectedArgs: "<user> <reason>",
	expectedArgsTypes: ["USER", "STRING"],
	callback: ({ message, interaction, args }) => {
		console.log("it work");
	},
};
