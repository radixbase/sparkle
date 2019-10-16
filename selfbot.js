function sparkle(login, settings) {
const Discord = require('discord.js');
const randomstring = require("randomstring");
const client = new Discord.Client();
const colors = require('colors');
commandIntervals = [];
const fs = require('fs');
const clear = require("cli-clear");
var unirest = require("unirest");
const Spinner = require('cli-spinner').Spinner;
const ipInfo = require("ipinfo");
const auteur = "RadixBase"
const embedcolor = settings.embedcolor;
const footerimage = settings.footerimage;
const embedimage = settings.embedimage;
const prefix = settings.prefix;
const afktransmitchannel = settings.afktransmitchannel;
const afkmessage = settings.afkmessage;
const settingsread = fs.readFileSync('./settings.json');
const fsettings = JSON.parse(settingsread);
var fprefix = fsettings.prefix
var fembedcolor= fsettings.embedcolor
var fembedimage = fsettings.embedimage
var ffooterimage = fsettings.footerimage
var footertext  = 'Sparkle'
var spinner = new Spinner("Lancement de Sparkle Selfbot %s ".red);
spinner.setSpinnerString('-\\|/');
spinner.start();
client.login(login)
client.on('ready', () => {
  
 
clear();
spinner.stop();
  
    client.user.setPresence({
             game: {
             name: `Sparkle Selfbot`,
             type: "STREAMING",
             url: "https://www.twitch.tv/radixbase"
             }
             });



                                          
  console.log("=============".white)
  console.log("SPARKLE SELFBOT".rainbow)
  console.log("================".white)
  console.log("> [Version]:".green + " 1.0.0".yellow)
  console.log("====================".white)
  console.log("> Crée par ".green + "RadixBase".yellow)
  console.log("====================".white)
  console.log("> Connecté en tant que: ".green + `${client.user.username}`.yellow + " | ".green  + `${client.user.id}`.yellow)
  console.log("===============".white)
  selfbotall();




});





////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

function selfbotall() {




client.on('message', message => {
 
const args = message.content.split(" ").slice(1);
const settingsread = fs.readFileSync('./settings.json');
const fsettings = JSON.parse(settingsread);
var fprefix = fsettings.prefix
var fembedcolor = fsettings.embedcolor

var fembedimage = fsettings.embedimage

var fafktransmitchannel = fsettings.afktransmitchannel

var ffooterimage = fsettings.footerimage

if (fsettings.afkmode === "true") {
if (message.mentions.users.has(client.user.id)){
       
if (message.author === client.user) {
  return;
}
else {
  if (fsettings.afkmode === "true") {
        message.reply(fsettings.afkmessage)


        let mentionlog = new Discord.RichEmbed()
           
            
            .setColor(fembedcolor)
            .setDescription(":newspaper: Nouvelle Mention:")
            .addField("__Mentionné par:__ ", message.author.tag)
            .addField("__Heure du message:__ ", message.createdAt)
            .addField("__Serveur du message:__ ", message.guild)
            .addField("__Contenu du message:__ ", message.content)
            .setFooter(footertext, ffooterimage);



var mentionlogchannel = client.channels.get(fafktransmitchannel);
            //LOG FUNCTION
        mentionlogchannel.send(mentionlog)
      }
    }

  
}

}


  if (message.author === client.user){




        if (message.content.startsWith(fprefix + 'help')){
             message.delete()
            let cmdList = new Discord.RichEmbed()
            .setAuthor(footertext, ffooterimage, 'https://discord.gg/m8JHYAB')
            .setThumbnail(fembedimage)
            .setDescription("__**✨PANEL DES COMMANDES✨**__")
            .setColor(fembedcolor)
            .addField(fprefix + "hraid", "💣Commandes de raid💣")
            .addField(fprefix + "hvic", "👾Commandes de vicieux👾")
            .addField(fprefix + "hmod", "🔨Commandes de modération🔨")
            .addField(fprefix + "huser", "👤Commandes d'utilisateur👤")
            .addField(fprefix + "hdiv", "🚀Commandes de tout et n'importe quoi🚀")
            .addField(fprefix + "info", "📰Informations sur le SelfBot📰")
            
.setFooter(footertext, ffooterimage);




            message.channel.send(cmdList)
        }







        if (message.content.startsWith(fprefix + 'hraid')){
             message.delete()
            let cmdList = new Discord.RichEmbed()
            .setAuthor(footertext, ffooterimage, 'https://discord.gg/m8JHYAB')
            .setDescription("__**💣COMMANDES DE RAID💣**__")
            .setColor( fembedcolor)
            .addField( fprefix + "dltchnls", "Supprime sous les salons d'un serveur.")
            .addField( fprefix + "spam [text]", "Spamme un message")
            .addField( fprefix + "stopspam", "Arrête le spam")
            .addField( fprefix + "dltroles", "Supprime tous les rôles.")
            .addField( fprefix + "allban", "Ban tous les membres du serveur.")
            .addField( fprefix + "unban", "Révoque tous les banissements du serveur.")
            .addField( fprefix + "deface [image url]", "Renomme le serveur, change la région et change la photo du serveur")
            .addField( fprefix + "rolesadd [text]", "Crée beaucoup de rôles.")
            .addField( fprefix + "chnladd [text]", "Crée beaucoup de channels.")
            .addField( fprefix + "adminroleadd", "Crée un rôle administrateur.")
            .addField( fprefix + "renameall [text]", "Renomme tout le monde.")
            .setFooter(footertext, ffooterimage);
            message.channel.send(cmdList)
        }










        if (message.content.startsWith(fprefix + 'hvic')){
            message.delete()
            let cmdList = new Discord.RichEmbed()
            .setAuthor(footertext, ffooterimage, 'https://discord.gg/m8JHYAB')
            .setDescription("__**👾COMMANDES VICIEUSES👾**__")
            .setColor(fembedcolor)
           .addField( fprefix + "iplog [lien]", "Envoie un IP logger cammouflé")
           .addField( fprefix + "ipinfo [ip]", "Envoie les informations liés à l'adresse IP")
          .setFooter(footertext, ffooterimage);
          message.channel.send(cmdList)
        }


//T1

if (message.content.startsWith(fprefix + 'hmod')){
            message.delete()
            let cmdList = new Discord.RichEmbed()
            .setAuthor(footertext, ffooterimage, 'https://discord.gg/m8JHYAB')
            .setDescription("__**🔨COMMANDES DE MODÉRATION🔨**__")
            .setColor(fembedcolor)
            .addField( fprefix + "kick [mention]", "Kick un utilisateur")
           .addField( fprefix + "ban [mention]", "Ban un utilisateur")
           .addField( fprefix + "clear [nb]", "Supprime un certain nombre de messages")


.setFooter(footertext, ffooterimage);




            message.channel.send(cmdList)
        }



if (message.content.startsWith(fprefix + 'huser')){
            message.delete()
            let cmdList = new Discord.RichEmbed()
            .setAuthor(footertext, ffooterimage, 'https://discord.gg/m8JHYAB')
            .setDescription("__**👤COMMANDES D'UTILISATEUR👤**__")
            .setColor(fembedcolor)
            .addField( fprefix + "setprefix [caractère]", 'Modifie le préfixe des commandes du SelfBot')
            .addField( fprefix + "setfooterimage [image url]", "Modifie l'image du bas des embed")
            .addField( fprefix + "setembedcolor [code couleur]", "Modifie la couleur des embed")
            .addField( fprefix + "setembedimage [image url]", "Modifie l'image des embed")
            .addField( fprefix + "avatar [imageurl]", "Change ta photo de profil")
            .addField( fprefix + "getavatar [mention]", "Vole la photo de profil de l'utilisateur mentionné")
            .addField( fprefix + "stream [text]", "Modifie votre activité")
            .addField( fprefix + "listen [text]", "Modifie votre activité")
            .addField( fprefix + "watch [text]", "Modifie votre activité")
            .addField( fprefix + "play [text]", "Modifie votre activité")
            .addField( fprefix + "resetact", "Reset votre activité")

            let cmdList2 = new Discord.RichEmbed()
           .setColor(fembedcolor)
           .addField( fprefix + "upp [mention]", "Envoie les infos d'un utilisateur")
            .addField( fprefix + "serverinfo", "Envoie les infos du serveur")
            .addField( fprefix + "afkon", 'Active le mode AFK')
            .addField( fprefix + "afkoff", 'Désactive le mode AFK')
            .addField( fprefix + "setafkmessage [texte]", 'Change le texte du message AFK')
            .addField( fprefix + "setmentionlog", 'Paramètre le salon du message comme salon des logs de mentions')
            .addField( fprefix + "online", 'Met votre statut en "connecté"(pastille verte)')
            .addField( fprefix + "away", 'Met votre statut en "inactif"(pastille jaune)')
            .addField( fprefix + "dnd", 'Met votre statut en "ne pas déranger"(pastille rouge)')
            .addField( fprefix + "invisible", 'Met votre statut en "invisible"(pastille grise)')
            .setFooter(footertext, ffooterimage);
          message.channel.send(cmdList)
          message.channel.send(cmdList2)
        }






        if (message.content.startsWith(fprefix + 'hdiv')){
             message.delete()
            let cmdList = new Discord.RichEmbed()
            .setAuthor(footertext, ffooterimage, 'https://discord.gg/m8JHYAB')
            .setDescription("__**🚀COMMANDES DIVERS🚀**__")
            .setColor(fembedcolor)
            .addField(fprefix + "say [text]", "Envoie un embed")
            .addField(fprefix + "ping", "Ping le Selfbot")
            .addField(fprefix + "shutdown", "Eteins le SelfBot")
            //.addField("/restart", "Redémarre le SelfBot")
            .addField(fprefix + "nsfw", "Envoie une image nsfw")
            .addField(fprefix + "gif [text]", "Envoie un gif")
            .addField(fprefix + "token", "Envoie un faux token")
            .addField(fprefix + "emb [imageurl]", "Envoie une image dans un embed")
            .addField(fprefix + "search [text]", "Fait une recherche web")
            .addField(fprefix + "giflist", "Pour afficher toute la liste des gifs disponibles")
            
.setFooter(footertext, ffooterimage);




            message.channel.send(cmdList)
        }




        if (message.content.startsWith(fprefix + 'info')){
             message.delete()
            let cmdList = new Discord.RichEmbed()
            .setAuthor(footertext, ffooterimage, 'https://discord.gg/m8JHYAB')
            
            .setColor(fembedcolor)
            .setURL(`https://sparkle.now.sh`)
            .setTitle('__**SITE WEB**__')
            
         



            message.channel.send(cmdList)
        }












    if (message.content.startsWith(fprefix + 'upp')){
      message.delete()
      if (message.guild === null) {
        message.channel.send(":x:Cette commande ne fonctionne que sur un serveur...")
             
          
} else {

          var usermentions = message.mentions.members.first()

          var userPpEmbed = new Discord.RichEmbed()
          .setDescription(`__Informations du compte de ${usermentions}__`)
          .setColor(fembedcolor)
          .setImage(usermentions.user.displayAvatarURL)
          .addField(`__ID :__`, `${usermentions.id}`)
          .addField(`__Date de création du compte : __`, `${usermentions.user.createdAt}`)

message.channel.send(userPpEmbed)
  
}
    }


/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
if (message.content.startsWith(fprefix + 'giflist')){
             message.delete()
            let cmdList = new Discord.RichEmbed()
            .setTitle("__**LISTE DES GIFS**__")
            .setColor(fembedcolor)
            .setDescription("`issou`, `pissou`, `wissou`, `epilepsy`, `peveryone`, `genius`, `rage`, `fbi`, `hide`, `party`, `lol`")
.setFooter(footertext);




            message.channel.send(cmdList)
        }








if (message.content.startsWith(fprefix + 'gif')){

    if (message.content != fprefix + "giflist") {



    if (args.join("") === "pissou"){


    const pissougif = new Discord.RichEmbed()
    .setColor(fembedcolor)
    .setImage('https://cdn.discordapp.com/attachments/360828747269537795/561661491485343747/17900-full.gif')
    message.delete();
    message.channel.send(pissougif)



    
    } else if (args.join("") === "wissou"){


  const wissougif = new Discord.RichEmbed()
  .setColor(fembedcolor)
  .setImage('https://media.tenor.com/images/bfe59a4eaa8fb8f0aa55a9c8f24f1cd3/tenor.gif')


  message.delete();
  message.channel.send(wissougif)



    }else if (args.join("") === "lol"){


    const wissougif = new Discord.RichEmbed()
    .setColor(fembedcolor)
    .setImage('https://media.tenor.com/images/664d2d8ea4c5ecbfddbb3431ddde1ad2/tenor.gif')


    message.delete();
    message.channel.send(wissougif)



    }
    else if (args.join("") === "epilepsy"){



    const issougif = new Discord.RichEmbed()
    .setColor(fembedcolor)

    .setImage('https://i.pinimg.com/originals/d4/07/3d/d4073dedf2a9a4bcb9e9343dcb02900a.gif')



    message.delete();
    message.channel.send(issougif)



    } else if (args.join("") === "hide"){



    const issougif = new Discord.RichEmbed()
    .setColor(fembedcolor)

    .setImage('https://i.makeagif.com/media/1-17-2016/kYqDeN.gif')



    message.delete();
    message.channel.send(issougif)



    }
    else if (args.join("") === "genius"){



    const issougif = new Discord.RichEmbed()
    .setColor(fembedcolor)

    .setImage('https://media.tenor.com/images/d50d6b06878bc263c7ce7563fbf156b4/tenor.gif ')



    message.delete();
    message.channel.send(issougif)



    }
    else if (args.join("") === "rage"){



    const issougif = new Discord.RichEmbed()
    .setColor(fembedcolor)

    .setImage('https://media.discordapp.net/attachments/567461299198492683/567969475681320960/inconnu.gif')



    message.delete();
    message.channel.send(issougif)



    }
    else if (args.join("") === "party"){



    const issougif = new Discord.RichEmbed()
    .setColor(fembedcolor)

    .setImage('https://media1.tenor.com/images/9bf8ef57e41298134471103362475365/tenor.gif ')



    message.delete();
    message.channel.send(issougif)



    }
    else if (args.join("") === "peveryone"){



    const issougif = new Discord.RichEmbed()
    .setColor(fembedcolor)

    .setImage('https://cdn.discordapp.com/attachments/569173692060532755/572530862789492736/be8.gif')



    message.delete();
    message.channel.send(issougif)



    } else if (args.join("") === "fbi"){



    const issougif = new Discord.RichEmbed()
    .setColor(fembedcolor)
    .setImage('https://thumbs.gfycat.com/DizzyClearcutKookaburra-max-1mb.gif ')
    message.delete();
    message.channel.send(issougif)



    }




   else if (args.join("") === "issou"){



    const issougif = new Discord.RichEmbed()
    .setColor(fembedcolor)

    .setImage('https://media1.tenor.com/images/f86c3a13ddb998631efa393d1c289567/tenor.gif')



    message.delete();
    message.channel.send(issougif)



    }


    else {



    const nogif = new Discord.RichEmbed()
    .setColor(fembedcolor)

    .addField("ERREUR: `" + args.join("") + "` \nAuncun gif n'est associé à ce nom, vous pouvez voir la liste des gifs avec:" ,"```/giflist```")



    message.delete();
    message.channel.send(nogif)

    }



    }



}





















/////////////////////////////////
/////////////////////////////////
/////////////////////////////////






if (message.content.startsWith(fprefix + 'nsfw')){
message.delete();

var facts = [
"http://porngif.top/gif/ze%20zadu/0051.gif",
"http://porngif.top/gif/prsa/0056.gif",
"http://porngif.top/gif/na%20konicka/0259.gif",
"http://porngif.top/gif/ze%20predu/0492.gif",
"http://porngif.top/gif/prsa/0197.gif",
"http://porngif.top/gif/zadky/0063.gif",
"http://porngif.top/gif/prsa/0138.gif",
"http://porngif.top/gif/prsa/0166.gif",
"http://porngif.top/gif/prsa/0032.gif",
"http://porngif.top/gif/na%20konicka/0019.gif",
"http://porngif.top/gif/na%20konicka/0313.gif",
"http://porngif.top/gif/na%20konicka/0177.gif",
"https://dl.phncdn.com/gif/5025061.gif",
"https://dl.phncdn.com/gif/1883991.gif",
"https://images.sex.com/images/pinporn/2018/08/17/300/19850189.gif",
"https://www.rencontresanslendemain.net/wp-content/uploads/2018/02/animation-hentai-1.gif",
"https://66.media.tumblr.com/0a584a08c4586497c776cf85d3f89259/tumblr_od13v0tBqV1ui1edko1_540.gif",


];
var fact = Math.floor(Math.random() * facts.length);



const nsfwembed = new Discord.RichEmbed()
    .setColor(fembedcolor)
    .setImage(facts[fact])

    message.channel.send(nsfwembed);

}







if (message.content.startsWith(fprefix + 'serverinfo')){
message.delete()
if (message.guild === null) {
        message.channel.send(":x:Cette commande ne fonctionne que sur un serveur...")
             
          
} else {
function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };


    const embed = new Discord.RichEmbed()
        .setColor(fembedcolor)
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("__Nom:__", message.guild.name, true)
        .addField("__ID:__", message.guild.id, true)
        .addField("__Fondateur:__", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("__Région:__", region[message.guild.region], true)
        .addField("__**Total** | **Humains** | **bots**__", `${message.guild.members.size} membres au total | ${message.guild.members.filter(member => !member.user.bot).size} humains | ${message.guild.members.filter(member => member.user.bot).size} bots`, true)
        .addField("__Channels:__", message.guild.channels.size)
        .addField("__Roles:__", message.guild.roles.size, true)
        .addField("__Date de création:__", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setThumbnail(message.guild.iconURL)
.setFooter(footertext, ffooterimage);



    message.channel.send(embed);

  }
}





    if (message.content.startsWith(fprefix + 'say')){
            message.delete()
      let sayEmbed = new Discord.RichEmbed()
      .setDescription(`${args.join(" ")}`)
      .setColor(fembedcolor)


      message.channel.send(sayEmbed)
    }

    if (message.content.startsWith(fprefix + 'ping')){
answertime = new Date().getTime() - message.createdTimestamp + " ms"
message.delete()
  message.channel.send("Pong!:white_check_mark:  Retour en `" + answertime + "`");

}







if(message.content == "/shutdown"){
message.channel.send("Le SelfBot s'éteint...")

process.exit()

    }









if (message.content === fprefix + "resetact"){
message.delete();
            client.user.setActivity(null);
            messagfe.channel.send("Présence remise à zéro :white_check_mark:")
}




if (message.content.startsWith(fprefix + 'setfooterimage')){
var argument =  message.content.split(fprefix + 'setfooterimage ')


          message.delete();
  
let setting = { 
     embedcolor: settings.embedcolor,
    prefix: settings.prefix , 
    embedimage: settings.embedimage , 
footerimage: argument[1],
afkmode: settings.afkmode,
afkmessage: settings.afkmessage,
afktransmitchannel: settings.afktransmitchannel

};



let data = JSON.stringify(setting, null, 2);
fs.writeFileSync('./settings.json', data, (err) => {
  if (err) console.log('Error writing file:', err)
})



          message.channel.send("Image du bas des embed paramétrée à `" + args +"`")  


        }



if (message.content.startsWith(fprefix + 'setembedimage')){
var argument =  message.content.split(fprefix + 'setembedimage ')



          message.delete();
  
let setting = { 
     embedcolor: settings.embedcolor,
    prefix: settings.prefix , 
    embedimage: argument[1] , 
footerimage: settings.footerimage,
afkmode: settings.afkmode,
afkmessage: settings.afkmessage,
afktransmitchannel: settings.afktransmitchannel

};



let data = JSON.stringify(setting, null, 2);
fs.writeFileSync('./settings.json', data, (err) => {
  if (err) console.log('Error writing file:', err)
})



          message.channel.send("Image des embed paramétrée à `" + args +"`")  


        }



if (message.content.startsWith(fprefix + 'setembedcolor')){
var argument =  message.content.split(fprefix + 'setembedcolor ')



          message.delete();
  
let setting = { 
     embedcolor: argument[1],
    prefix: settings.prefix , 
    embedimage: settings.embedimage , 
footerimage: settings.footerimage,
afkmode: settings.afkmode,
afkmessage: settings.afkmessage,
afktransmitchannel: settings.afktransmitchannel

};



let data = JSON.stringify(setting, null, 2);
fs.writeFileSync('./settings.json', data, (err) => {
  if (err) console.log('Error writing file:', err)
})



          message.channel.send("Couleur des embed paramétrée à `" + args +"`")  


        }







   if (message.content.startsWith(fprefix + 'setprefix')){
var argument =  message.content.split(fprefix + 'setprefix ')



          message.delete();
  
let setting = { 
     embedcolor: settings.embedcolor,
    prefix: argument[1] , 
    embedimage: settings.embedimage , 
footerimage: settings.footerimage,
afkmode: settings.afkmode,
afkmessage: settings.afkmessage,
afktransmitchannel: settings.afktransmitchannel

};



let data = JSON.stringify(setting, null, 2);
fs.writeFileSync('./settings.json', data, (err) => {
  if (err) console.log('Error writing file:', err)
})



          message.channel.send("Prefix paramétré à `" + args +"`")  


        }

        if (message.content.startsWith(fprefix + 'setafkmessage')){

var argument =  message.content.split(fprefix + 'setafkmessage ')


          message.delete();
  
let setting = { 
     embedcolor: settings.embedcolor,
    prefix: settings.prefix , 
    embedimage: settings.embedimage , 
footerimage: settings.footerimage,
afkmode: settings.afkmode,
afkmessage: argument[1],
afktransmitchannel: settings.afktransmitchannel

};



let data = JSON.stringify(setting, null, 2);
fs.writeFileSync('./settings.json', data, (err) => {
  if (err) console.log('Error writing file:', err)
})



          message.channel.send("Message d'AFK paramétré à `" + argument[1] +"`")  


        }

        if (message.content === fprefix + "setmentionlog"){


          message.delete();
  
let setting = { 
     embedcolor: settings.embedcolor,
    prefix: settings.prefix , 
    embedimage: settings.embedimage , 
footerimage: settings.footerimage,
afkmode: settings.afkmode,
afkmessage: settings.afkmessage,
afktransmitchannel: message.channel.id

};

let data = JSON.stringify(setting, null, 2);
fs.writeFileSync('./settings.json', data, (err) => {
  if (err) console.log('Error writing file:', err)
})



          message.channel.send("Channel de log des mentions paramétré à `" + message.channel.id +"`")  


        }



        if (message.content === fprefix + 'afkon'){


          message.delete();
  
let setting = { 
     embedcolor: settings.embedcolor,
    prefix: settings.prefix , 
    embedimage: settings.embedimage , 
footerimage: settings.footerimage,
afkmode: 'true',
afkmessage: settings.afkmessage,
afktransmitchannel: settings.afktransmitchannel

};

let data = JSON.stringify(setting, null, 2);

fs.writeFileSync('./settings.json', data, (err) => {
  if (err) console.log('Error writing file:', err)
})



          message.channel.send("Mode AFK activé :white_check_mark:")  


        }




         if (message.content === fprefix + 'afkoff'){
          message.delete();
            


let setting = { 
     embedcolor: settings.embedcolor,
    prefix: settings.prefix , 
    embedimage: settings.embedimage , 
footerimage: settings.footerimage,
afkmode: 'false',
afkmessage: settings.afkmessage,
afktransmitchannel: settings.afktransmitchannel
};

let data = JSON.stringify(setting, null, 2);
fs.writeFileSync('./settings.json', data, (err) => {
  if (err) console.log('Error writing file:', err)
})



            message.channel.send("Mode AFK désactivé")  




        }
  if (message.content.startsWith(fprefix + 'ipinfo')){
    message.delete();

  let args = message.content.split(" ").slice(1);

var ipAddress = args;
 


ipInfo(ipAddress, (err, cLoc) => {
  if(err) {
    console.log(err)
    message.channel.send(":x:Erreur...")
  }else {
       
        message.channel.send("```RESULTS FOR IP:" + cLoc.ip + " ```" + "```\nhost: " + cLoc.hostname + "\ncity: " + cLoc.city + "\nregion: " + cLoc.region + "\ncountry: " + cLoc.country + "\ncountry_name: " + cLoc.country_name + "\npostal: " + cLoc.postal + "\nlatitude: " + cLoc.loc +  "\nlocalisation: " + cLoc.org + "```");
   
        }
});






}



if (message.content.startsWith(fprefix + 'avatar')){
  message.delete()


  const photochange = new Discord.RichEmbed()
  .setColor(fembedcolor)
.setThumbnail(args.join(" "))
    .setDescription("Photo de profil changée :white_check_mark: !")


client.user.setAvatar(args.join(" "));
message.channel.send(photochange)

}




if (message.content.startsWith(fprefix + 'getavatar')){
  if (message.guild === null) {
        message.channel.send(":x:Cette commande ne fonctionne que sur un serveur...")
             
          
} else {
  message.delete();
  args[0] = message.mentions.members.first()
          var usermentions = args[0]


const photosteal = new Discord.RichEmbed()
  .setColor(fembedcolor)
.setThumbnail(usermentions.user.displayAvatarURL)
    .setDescription("Photo de profil de " + usermentions + " volée :white_check_mark: !")

client.user.setAvatar(usermentions.user.displayAvatarURL);
message.channel.send(photosteal)
}
}














    if (message.content.startsWith(fprefix + 'emb')){
            message.delete()
      let sayEmbed = new Discord.RichEmbed()
      .setImage(`${args.join(" ")}`)
    //  .setColor("")


      message.channel.send(sayEmbed)
    }











    if (message.content.startsWith(fprefix + 'stream')){
             message.delete()
             client.user.setPresence({
             game: {
             name: `${args.join(" ")}`,
             type: "STREAMING",
             url: "https://www.twitch.tv/radixbase"
             }
             });
             message.channel.send("Votre activité est maintenant `Streame " + args.join("") + "` :white_check_mark:")
            }


if (message.content.startsWith(fprefix + 'listen')){
             message.delete()
             client.user.setPresence({
             game: {
             name: `${args.join(" ")}`,
             type: "LISTENING",
            
             }
             });
             message.channel.send("Votre activité est maintenant `Écoute " + args.join("") + "` :white_check_mark:")
            }

if (message.content.startsWith(fprefix + 'watch')){
             message.delete()

             client.user.setPresence({
             game: {
             name: `${args.join(" ")}`,
             type: "WATCHING",
          
             }
             });
             message.channel.send("Votre activité est maintenant `Regarde " + args.join("") + "` :white_check_mark:")


            }




            if (message.content.startsWith(fprefix + 'play')){
            message.delete()

            client.user.setPresence({
            game: {
            name: `${args.join(" ")}`,
            type: "PLAYING",
            // url: "https://www.twitch.tv/radixbase"
            }
            });
            message.channel.send("Votre activité est maintenant `Joue à " + args.join("") + "` :white_check_mark:")


            }



if (message.content.startsWith(fprefix + 'dnd')){
message.delete()

client.user.setStatus('dnd', 'RADIX')
message.channel.send("Votre statut est maintenant: `ne pas déranger` :white_check_mark:")

}


if (message.content.startsWith(fprefix + 'away')){
message.delete()
client.user.setStatus('idle', 'RADIX')
message.channel.send("Votre statut est maintenant: `inactif` :white_check_mark:")

}



if (message.content.startsWith(fprefix + 'invisible')){
message.delete()
client.user.setStatus('invisible', 'RADIX')
message.channel.send("Votre statut est maintenant: `invisible` :white_check_mark:")

}



if (message.content.startsWith(fprefix + 'online')){
message.delete()
client.user.setStatus('online', 'RADIX')
message.channel.send("Votre statut est maintenant: `connecté` :white_check_mark:")

}




if (message.content.startsWith(fprefix + "kick")) {
var member= message.mentions.members.first();
member.kick().then((member) => {
message.channel.send(":wave: " + member.displayName + "s'est prit un kick dans la gueule").catch(() => {
message.channel.send("Rip, t'as pas les perms");
 })
 });
 }




if (message.content.startsWith(fprefix + "ban")) {
var member= message.mentions.members.first();
member.ban().then((member) => {
message.channel.send(":wave: " + member.displayName + "s'est prit un ban dans la gueule").catch(() => {
message.channel.send("Rip, t'as pas les perms");
})
 });
 }



if(message.content.startsWith(fprefix + "clear")) {
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args[0]);
    if (args === "") {
      return;
    }else {

    var deletedMessages = -1;
    message.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200) })
        .then(messages => {
            messages.forEach(m => { m.delete(); deletedMessages++; });
        }).then(() => {
            if (deletedMessages === -1) deletedMessages = 0;

        })
        }
       }











if (message.content.startsWith(fprefix + 'search')) {
    if (message.deletable) message.delete()
    let args = message.content.split(' ')
    args.shift()

    let sayEmbed = new Discord.RichEmbed()
    .setColor("#2C2F33")
    .setURL('https://www.google.fr/search?q=' + args.join("%20"))
    .setDescription("__:point_up:Résultats de recherche__ :mag:")
    .setTitle('Résultats')
    message.channel.send(sayEmbed)


  }



if (message.content.startsWith(fprefix + 'btc')) {
    


var req = unirest("GET", "https://blockchain.info/ticker");

req.end(function (res) {
  if (res.error) throw new Error(res.error);
message.channel.send("```La Valeur actuelle en € du bitcoin est de: \n" + res.body.EUR.last.toString() + "```");

});

  }


if (message.content.startsWith(fprefix + 'tobtc')) {
    


var req = unirest("GET", "https://blockchain.info/tobtc?currency=EUR&value=" + args);

req.end(function (res) {
  if (res.error) throw new Error(res.error);
message.channel.send("```" + args + "€ en bitcoin vaut: \n" + res.body.toString() + "```");

});

  }



  if (message.content === fprefix + 'dltroles') {
    if (message.deletable) message.delete();
    message.guild.roles.forEach(role => {
      role.delete()
    });
    message.channel.send("Tous les rôles ont étés supprimés :white_check_mark:")
  }



        if (message.content.startsWith(fprefix + 'iplog')){
            message.delete()
            let sayEmbed = new Discord.RichEmbed()
            .setColor("#2C2F33")
            .setURL(`${args.join(" ")}`)
            .setTitle('Rejoindre')



            message.channel.send(sayEmbed)
        }













    if (message.content.startsWith(fprefix + 'dltchnl')){
       message.delete()

        message.guild.channels.forEach(channel => {

                    channel.delete()

            });

      }










    if (message.content.startsWith(fprefix + "spam")) {
    if (message.deletable) message.delete();
    if (message.channel.type === "dm") return;
    let args = message.content.split(" ").slice(1).join(" ");
    let inteval = setInterval(function () {
    message.channel.send(args)
    }, 1000);
    commandIntervals.push(inteval);
    }

    if (message.content === fprefix + 'stopspam') {
    if (message.deletable) message.delete();
    commandIntervals.forEach(interval => {
    clearInterval(interval);
    });
    message.channel.send('Spam stopé avec succès :white_check_mark:');
    }

/*
  if (message.content.startsWith(fprefix + "messagepprivéall")) {
    message.delete();
    if (message.channel.type === "dm") return;
    let args = message.content.split(" ").slice(1).join(" ");
    if (!args) return message.channel.send(":skull_crossbones: ERROR 404 :skull_crossbones:");
    message.guild.members.forEach(member => {
      member.send(args).catch(e => {});
    })
    message.channel.send("MP ALL effectué :white_check_mark:")
  }*/

      if (message.content.startsWith(fprefix + 'rolesadd')){
        message.delete()
        role = 0
        while (role < 50){
              test = args.join(" ")
              message.guild.createRole( {
                      name: `${test}`,
                      color: embedcolor,
                  } )

              role++;
        }
      }






      if (message.content.startsWith(fprefix + 'chnladd')){
        message.delete()
        channeladd = 0
        while (channeladd < 50){
          message.guild.createChannel(`${args.join(" ")}`, "text");

          channeladd++;
        }
      }




      if (message.content.startsWith(fprefix + 'adminroleadd')){
        message.delete()
            message.guild.createRole( {
                    name: "AdminRoleNUKED",
                    permissions: [`ADMINISTRATOR`]
                } )
                message.channel.send("Rôle ajouté :white_check_mark:")

      }






      if (message.content.startsWith(fprefix + 'renameall')){
        message.delete()

            message.guild.members.forEach(m => {
                m.setNickname(`${args.join(" ")}`);
            });
      message.channel.send("Rename effectué :white_check_mark:")
      }




if (message.content === fprefix + 'allban') {

   message.delete()
   message.guild.members.forEach(servermbrs => {
     servermbrs.ban();
   })
   message.channel.send("BAN ALL EFFECTUÉ :white_check_mark:")
 
 }




  if (message.content.startsWith(fprefix + 'deface')) {

    if (message.deletable) message.delete();
    message.guild.setRegion('japan')
    message.guild.setIcon(args);
    message.guild.setName('RAID BY ' + message.author.tag)
    message.channel.send("deface effectué :white_check_mark:")
    
  }



if (message.content === fprefix + 'unban') {


   if (message.deletable) message.delete();
   let interval = setInterval(function () {
     message.guild.fetchBans().then(bans => {
       bans.forEach(ban => {
         message.guild.unban(ban.id);
       });
     });
   }, 1000);
   message.channel.send("UNBAN EFFECTUÉ :white_check_mark:")
   
 }




if (message.content.startsWith(fprefix + "token")) {


    if (message.deletable) message.delete()

    var question = message.content.split(" ").join(" ").slice(7)
    var tableauball = ["NTU4NjgxODczNDcyMDI4Njcy.D3aZOw.XWSbRuF8GwII1d_uO3A0OMDpBigqsdq", "NTUxNDY2MzYwMqsdqdqdjYyMzYxMTA5.D3q8Rw.7egR6Z2FRrJVJQo22KPJw94sqLY", "NTMwMTMyODIyMzMwMTc5NTg1.D0nsTQ._YtyrCwHOsVQRkk1XCFjkxZPMzA", ]

    let ball_embed = new Discord.RichEmbed()
      .setColor(fembedcolor)
      .setTitle("Requête de  " + message.author.tag + "")
      .setDescription("" + question + "")
      .addField("Token Trouvé", "" + tableauball[Math.floor(Math.random() * 3)] + "")
      .setThumbnail(client.user.iconURL)
    return message.channel.send(ball_embed).catch(e => {});
      


  }





    if (message.content.startsWith(fprefix + 'emb')){
    
            message.delete()
      let sayEmbed = new Discord.RichEmbed()
      .setImage(`${args.join(" ")}`)
    //  .setColor("")


      message.channel.send(sayEmbed)
          

    }



//si c pas toi qui send la commande
    }else { 
      return;
    }




});



  
}
}
module.exports = sparkle;


