/* eslint-disable no-unused-vars */
const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
    client.pages(message, [
        "**Bittersweet Heart**: 50 :yen: *The past reeks of nostalgia, no?*\n**Expresso**: 40 :yen: *Dark like the moonless night, hot like the sun, more bitter than lucifer himself.*\n**Cappuccino**: 35 :yen: *The delight from Italy.*\n**Midday Monday**: 45 :yen: *A pick me up for when the day is already halfway through.*\n**Green Tea Latte**: 40 :yen: *Sweet and savory, with a twang of bitterness for the heart.*", 
        "**Marrakech**: 45 :yen: *Green tea with a strong fresh hit of mint.*\n**Chocobee Miruku**: 55 :yen: *A love potion of sweet, healthy, nourishing chocolate.*\n**Bedchamber**: 60 :yen: *It is recommended you're in bed 30 minutes after you have taken this drink.*\n**Milky Way**: 55 :yen: *Sweet and cool, like a trip to outer space.*\n**Teh Tarik**: 50 :yen: *A tea based drink with a touch of milk from Malaysia.*",
        "**Russian Tea**: 55 :yen: *Tea with a strong hint of cinnamon and lemon (Disclaimer: Not actually russian)*",
        "Payments are taken via PayPal, Steam cards, and Tatsumaki.\nMenu is subject to updates. Stay tuned."
    ]);
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