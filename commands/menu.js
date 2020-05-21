/* eslint-disable no-unused-vars */
const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
    client.pages(message, ["Page 1", "Page 2"]);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "menu",
    category: "Utility",
    description: "Shows an interactive menu.",
    usage: "menu"
};