/* eslint-disable no-unused-vars */
const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
    const pages = ["Pages?", "Page two?", "Is this page three?"];
    let page = 1;
    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setFooter(`Page ${page} of ${pages.length}.`)
        .setDescription(pages[page - 1]);

    message.channel.send(embed).then(msg => {
        msg.react("⬅").then(r => {
            msg.react("➡");

            const backwardsFilter = (reaction, user) => reaction.emoji.name == "⬅" && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name == "➡" && user.id === message.author.id;

            const backwards = msg.createReactionCollector(backwardsFilter, {
                time: 60000
            });
            const forwards = msg.createReactionCollector(forwardsFilter, {
                time: 60000
            });

            backwards.on("collect", r => {
                if (page === 1) return;
                page--;
                msg.reactions.find(reaction => reaction.emoji.name == "⬅")
                    .remove(message.author);
                embed.setDescription(pages[page - 1]);
                embed.setFooter(`Page ${page} of ${pages.length}.`);
                msg.edit(embed);
            });

            forwards.on("collect", r => {
                if (page === pages.length) return;
                page++;
                msg.reactions.find(reaction => reaction.emoji.name == "➡")
                    .remove(message.author);
                embed.setDescription(pages[page - 1]);
                embed.setFooter(`Page ${page} of ${pages.length}.`);
                msg.edit(embed);
            });
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
    name: "menu",
    category: "Utility",
    description: "Shows an interactive menu.",
    usage: "menu"
};