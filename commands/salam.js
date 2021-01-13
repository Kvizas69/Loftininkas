module.exports = {
    name: 'Sveikas',
    description: "Čia testavimo komanda!",
    execute(message, args){
        if(message.member.roles.cache.has('798588706118041640')){

        
          message.channel.send('Atsipisk ate :heart: !');

        }else {
            message.channel.send('Tu neturi teisės panaudoti šios komandos');
        }
    }
}
