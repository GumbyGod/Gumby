const discord = require ('discord.js');

var client = new discord.Client();

const token = "Njc5NzMyOTU0MjgwMjMwOTUz.Xk1rqQ.B0PuKm8j3td4_dxBvInyRPUUP-8";

client.on ("ready", () => {
    console.log ("ready!");

    client.user.setGame ("hello!");

});

const prefix ="gb!"
client.on ("message", (message) => {

    if (message.author.bot) return;

    if(message.content.startsWith (prefix +"hello")) {
        message.reply ('Hi im Gumby');

    }
});
client.login (token);