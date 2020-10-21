const Discord = require('discord.js');
const prefix ="!";
const client = new Discord.Client();
client.on('message', message => {

  if (message.content.startsWith(prefix + "ping")) {

      var ping = Date.now() - message.createdTimestamp + " ms";
      message.channel.send("Hey U your ping is  " + `${Date.now() - message.createdTimestamp}` + " ms");

    }
});

client.login("Your discord Bot Token Goes here");

//BTW join my discord
//https://discord.gg/vztgW6T
