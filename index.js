const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';


client.once('ready', () => {
  console.log('Loftinikas prisijunges');
})

client.on('message', message =>{ //kaip botas reguoja i zinute
  if(!message.content.startsWith(prefix) || message.author.bot) return; //nereguos jeigu nera prefixo
  
  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();
  
  if(command == 'salam'){
    message.channel.send('aleikum!');
  }
});

client.login(token);
