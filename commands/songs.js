/* eslint-disable no-unused-vars */
const path = require("path");
const fs = require("fs");
const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
    const directoryPath = path.join(__dirname, 'storage');
    console.log(directoryPath);
    fs.readdir(directoryPath, function(err, files) {
        if (err) {
            return console.log("Unable to scan directory:" + err);
        }

        files.forEach(function(file) {
            console.log(file);
        });
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "songs",
    category: "Utility",
    description: "Lists songs.",
    usage: "songs"
};