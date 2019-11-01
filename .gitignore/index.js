const Discord = require("discord.js");
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = low(adapter);
const ms = require('ms');
const superagent = require("superagent");

db.defaults({ histoires: [], xp: []}).write()

var client = new Discord.Client();
var prefix = "/";
var footer = ("Zid Ecovitch | Fukstaz")
var footer2 = ('https://image.noelshack.com/fichiers/2019/43/3/1571785803-lacoste.png')
var color = ("0x78eeff")
var token = "NTQ3NzU0OTU0NTg1MTQ1MzQ1.D07Z-Q.yLfR4T0_TpfmFmvhZzQyl0oQqi4";

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
//////////////////////////
//////// XP /////////////
/////////////////////////

/////////////////////////
///////// FIN XP ////////    
/////////////////////////

client.on('message', message => {
    var time = message.createdAt.toString().split(" ");
    console.log(message.guild.name + ' | ' +  message.channel.name + ' > [' + time[4] + '] ' + message.author.tag + ": " + message.content);
});

client.on('message', data => {
  if (data.content === 'Georges') {
    data.channel.send('Georges Pompidou ? Ou moi ?');
  }
});

client.on('message', data => {
    if (data.content === 'Cava Georges') {
      data.channel.send('Super ! Et toi ?');
    }
  });

  client.on('message', data => {
    if (data.content === 'Cava Georges?') {
      data.channel.send('Super ! Et toi ?');
    }
  });

  client.on('message', data => {
    if (data.content === 'Cava Georges ?') {
      data.channel.send('Super ! Et toi ?');
    }
  });

  client.on('message', data => {
    if (data.content === 'ça va Georges') {
      data.channel.send('Super ! Et toi ?');
    }
  });

  client.on('message', data => {
    if (data.content === 'ça va Georges?') {
      data.channel.send('Super ! Et toi ?');
    }
  });

  client.on('message', data => {
    if (data.content === 'ça va Georges ?') {
      data.channel.send('Super ! Et toi ?');
    }
  });

  client.on('message', data => {
    if (data.content === 'Ca va Georges') {
      data.channel.send('Super ! Et toi ?');
    }
  });

  client.on('message', data => {
    if (data.content === 'Ca va Georges?') {
      data.channel.send('Super ! Et toi ?');
    }
  });

  client.on('message', data => {
    if (data.content === 'Ca va Georges ?') {
      data.channel.send('Super ! Et toi ?');
    }
  });

client.on('message', data => {
    if (data.content === 'georges') {
      data.channel.send('Georges Pompidou ? Ou moi ?');
    }
});

client.on('message', data => {
    if (data.content === 'toi') {
      data.channel.send('Ah^^, autant pour moi.');
    }
});

  client.on('message', data => {
    if (data.content === 'Toi') {
      data.channel.send('Ah^^, autant pour moi.');
    }
});

client.on('message', data => {
  if (data.content === 'iphone') {
    data.channel.send('Non Samsung ! Les Samsungs sont bien plus puissant et rapide !');
  }
});

client.on('message', data => {
    if (data.content === 'Iphone') {
      data.channel.send('Non Samsung ! Les Samsungs sont bien plus puissant et rapide !');
    }
  });

client.on('message', data => {
  if (data.content === 'lacosterp') {
    data.channel.send('Meilleur serveur !');
  }
});

client.on('message', data => {
    if (data.content === 'lacoste') {
      data.channel.send('Meilleur marque !');
    }
});

  client.on('message', data => {
    if (data.content === 'lacosteroleplay') {
      data.channel.send('Meilleur serveur !');
    }
});

client.on('ready', function () {

    var games = [
        "/help | LacosteRP",
        "LacosteRP <3",
    ]
    client.user.setActivity(setInterval(function() {
    client.user.setActivity(games[Math.floor(Math.random() * games.length)], {url:"https://www.twitch.tv/deax_licorne", type: "STREAMING"})}, 10000))

    console.log("Georges - Connecté");

});

client.on('guildMemberAdd', function(user) {
    
        var embed = new Discord.RichEmbed();
        embed.setAuthor(user.displayName, user.user.displayAvatarURL)
        embed.setTitle("Nouveau membre ! ✅");
        embed.addField("Utilisateur", user.displayName);
        embed.setColor("0x00ff00");
        embed.setTimestamp();
        embed.setThumbnail(user.user.displayAvatarURL);
        user.guild.channels.find("name", "🛫𝘿𝙊𝙐𝘼𝙉𝙀𝙎").sendEmbed(embed);
        user.addRole(user.guild.roles.find("name", "Joueur"));
    
    user.send("Bienvenue sur le serveur Discord de la communauté LacosteRP ! Je suis Georges, le bot de cette communauté. Si besoin tu peux utiliser la commande **/help** !");
    var games = [
        "/help | LacosteRP",
        "LacosteRP <3"
    ]
        client.user.setActivity(setInterval(function() {
        client.user.setActivity(games[Math.floor(Math.random() * games.length)], {url:"https://www.twitch.tv", type: "STREAMING"})
    }, 5000))
});

client.on("guildMemberRemove", function(user) {

        var embed = new Discord.RichEmbed();
        embed.setAuthor(user.displayName, user.user.displayAvatarURL)
        embed.setTitle("Membre partie ! ❌");
        embed.addField("Utilisateur", user.displayName);
        embed.setColor("0xff0000");
        embed.setTimestamp();
        embed.setThumbnail(user.user.displayAvatarURL);
        user.guild.channels.find("name", "🛫𝘿𝙊𝙐𝘼𝙉𝙀𝙎").sendEmbed(embed);

    var games = [
        "/help | LacosteRP",
        "LacosteRP <3"
    ]
        client.user.setActivity(setInterval(function() {
        client.user.setActivity(games[Math.floor(Math.random() * games.length)], {url:"https://www.twitch.tv", type: "STREAMING"})
    }, 3000))
});

client.on('message', message => {
    
    var ping = client.ping;
    var member = message.member;
    var users = message.guild.memberCount
    var args = message.content.split(' ');

    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
        .setTitle("🤖 | LacosteRP Aide")
        .setDescription("Ci-dessous, les nombreuses commandes de Georges | LacosteRP.")
        .addField("**__Commandes utiles:__**",`[${prefix}help](https://discord.gg/5jX7eFm) - Liste des commandes du bot. \n[${prefix}ping](https://discord.gg/5jX7eFm) - Ping de LacosteRP. \n[${prefix}users](https://discord.gg/5jX7eFm) - Voir le nombre de personne sur le discord. \n[${prefix}invite](https://discord.gg/hpFvMUT) - Invitation pour le discord LacosteRP. \n[${prefix}deaxlicorne](https://discord.gg/5jX7eFm) - Lien twitch de notre Amie Deax. \n[${prefix}partenaire](https://discord.gg/5jX7eFm)- Liste des partenaires et lien du formulaire. \n[${prefix}info](https://discord.gg/5jX7eFm) - Tout savoir sur le serveur Discord.`)
        .addField("**__Commandes de modération:__**",`[${prefix}kick @user raison](https://discord.gg/5jX7eFm) - Exclure un utilisateur n'ayant pas respecter le règlement. \n[${prefix}ban @user raison](https://discord.gg/5jX7eFm) - Bannir un utilisateur dans un cas extrême.\n[${prefix}clear (nombre)](https://discord.gg/hpFvMUT) - Supprime un nombre x de message dans un salon. \n[${prefix}mute @user raison](https://discord.gg/5jX7eFm) - Mute un utilisateur n'ayant pas respecter le règlement.`)
        .setColor(color)
        .setTimestamp()
        .setFooter(footer, footer2)
        message.delete() 
    message.channel.send(embed);
    }
  
    if (message.content === prefix + "ping"){
        if(ping <= 99) {
             var embed = new Discord.RichEmbed()
             .addField(`🤖 | Latence du robot`, `:hourglass: | ${Math.round(client.ping)} ms.`)
             .setColor("0x7cc576")
             .setTimestamp()
             .setFooter(footer, footer2)
             message.channel.send(embed);
        } else if(ping <= 200) {
             var embed = new Discord.RichEmbed()
             .addField(`🤖 | Latence du robot`, `:hourglass: | ${Math.round(client.ping)} ms.`)
             .setColor("0xffe200")
             .setTimestamp()
             .setFooter(footer, footer2)
             message.channel.send(embed);
        } else if(ping <= 999) {
             var embed = new Discord.RichEmbed()
             .addField(`🤖 | Latence du robot`, `:hourglass_flowing_sand: | ${Math.round(client.ping)} ms.`)
             .setColor("0xdb3328")
             .setTimestamp()
             .setFooter(footer, footer2)
             message.channel.send(embed);
        }
    }
    if (message.content === prefix + "users"){
         if(users <= 100) {
             var embed = new Discord.RichEmbed()
             .addField("🤖 | Membres du serveur", `👥 | ${users - getBotCount(member.guild)}  membres.`)
             .setColor("0xdb3328")
             .setTimestamp()
             .setFooter(footer, footer2)
             message.channel.send(embed);
        } else if(users <= 500) {
             var embed = new Discord.RichEmbed()
             .addField("🤖 | Membres du serveur", `👥 |  ${users - getBotCount(member.guild)}  membres.`)
             .setColor("0xffe200")
             .setTimestamp()
             .setFooter(footer, footer2)
             message.channel.send(embed);
        } else if(users >= 999) {
             var embed = new Discord.RichEmbed()
             .addField("🤖 | Membres du serveur", `👥 | ${users - getBotCount(member.guild)} +  membres.`)
             .setColor("0x7cc576")
             .setTimestamp()
             .setFooter(footer, footer2)
             message.channel.send(embed);
        }
        function getBotCount(guild) {
            return guild.members.filter(member => { return member.user.bot }).size;
        }
    }

    if(message.content.startsWith(prefix + "clear")){
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
               var ClearEmbed = new Discord.RichEmbed()
               .setDescription("❗ | Vous n'avez pas la permission !")
               .setColor(color)
               .setTimestamp()
               .setFooter(footer, footer2)
               message.delete()
            return message.channel.send(ClearEmbed)};
            var ClearrEmbed = new Discord.RichEmbed()
              .setDescription("❓ | Vous devez préciser le nombre de message à supprimer.")
              .setColor(color)
              .setTimestamp()
              .setFooter(footer, footer2)
              message.delete()
           let args = message.content.split(" ").slice(1);
           if(!args[0]) return message.channel.send(ClearrEmbed);
            message.channel.bulkDelete(args[0]).then(() => {
                var ClearEmbed = new Discord.RichEmbed()
                .addField(`🤖 | Nombre de message supprimé`,`🗑 | ${args[0]} messages.`)
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
                message.delete()
                message.channel.send(ClearEmbed);
           });
        }
  
      if (message.content === prefix + "invite"){
            var embed = new Discord.RichEmbed()
           .addField("🤖 | Lien d'invitation", "📨 | https://discord.gg/hpFvMUT")
           .setColor(color)
           .setTimestamp()
           .setFooter(footer, footer2)
           message.delete()
           message.channel.send(embed);
        }
        if (message.content == prefix + "deaxlicorne"){
            var EmbedTwitter = new Discord.RichEmbed()
            .addField("🤖 | Lien de Deax_Licorne", `📺 | https://www.twitch.tv/deax_licorne`)
            .setColor(color)
            .setTimestamp()
            .setFooter(footer, footer2)
            message.delete()
            message.channel.send(EmbedTwitter)
        }  
        if (message.content == prefix + "partenaires"){
            var EmbedTwitter = new Discord.RichEmbed()
            .addField("🤖 | Lien de partenariat", `📑 | pasencoredispo.lacosterp`)
            .setTimestamp()
            .setFooter(footer, footer2)
            message.delete()
            message.channel.send(EmbedTwitter)
        }
});

client.on('message', async message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLowerCase();


    if (message.content.startsWith(`${prefix}mute`)) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            var MuteEmbed = new Discord.RichEmbed()
            .setDescription("❗ | Vous n'avez pas la permission !")
            .setColor(color)
            .setTimestamp()
            .setFooter(footer, footer2)
            message.delete()
            return message.channel.send(MuteEmbed);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
                var MuteEmbed = new Discord.RichEmbed()
                .setDescription("❓ | Merci de mentionner l'utilisateur à mute")
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
                message.delete()
                return message.channel.send(MuteEmbed);
            } else {
                let role = message.guild.roles.find(r => r.name === "🔇 Mute");
                if (!role) {
                    try {
                        role = await message.guild.createRole({
                            name: "🔇 Mute",
                            color: "#c4c1c1",
                            permissions: []
                        });
                        message.guild.channels.forEach(async (channel) => {
                            await channel.overwritePermissions(role, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS: false
                            });
                        });
                    } catch (e) {
                        console.log(e.stack);
                    }
                }
                const memberToMute = message.guild.member(userToMute) || await message.guild.fetchMember(userToMute);
                await memberToMute.addRole(role);
                var MuteEmbed = new Discord.RichEmbed()
                .addField(`🤖 | Mute effectué`,`${message.mentions.users.first()} a été mute par <@` + message.member.id + `>.`)
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
                message.delete()
                message.channel.send(MuteEmbed); 
                return;
            }
        }
    }

    if (message.content.startsWith(`${prefix}unmute`)) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            var MuteEmbed = new Discord.RichEmbed()
            .setDescription("❗ | Vous n'avez pas la permission !")
            .setColor(color)
            .setTimestamp()
            .setFooter(footer, footer2)
            message.delete()
            return message.channel.send(MuteEmbed);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
                var MuteEmbed = new Discord.RichEmbed()
                .setDescription("❓ | Merci de mentionner l'utilisateur à unmute")
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
                message.delete()
                return message.channel.send(MuteEmbed);
            } else {
                let role = message.guild.roles.find(r => r.name === "🔇 Mute");

                const memberToMute = message.guild.member(userToMute) || await message.guild.fetchMember(userToMute);
                
                await memberToMute.removeRole(role);
                var MuteEmbed = new Discord.RichEmbed()
                .addField(`🤖 | Unmute effectué `,`${message.mentions.users.first()} a été demute par <@` + message.member.id + `>.`)
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
                message.delete()
                message.channel.send(MuteEmbed);
                return;
           }                                                              
        }
    }

    if(message.content.startsWith(prefix + "ban")){
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            var BanEmbed = new Discord.RichEmbed()
                .setDescription(`❗ | Vous n'avez pas la permission !`)
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
                message.delete()
            return message.channel.send(BanEmbed).catch((error) => { console.log(error.message) })
        }
            
        let member = message.mentions.members.first();
        if(!member) {
          var BanEmbed = new Discord.RichEmbed()
              .setDescription(`❓ | Merci de mentionner l'utilisateur à bannir`)
              .setColor(color)
              .setTimestamp()
              .setFooter(footer, footer2)
          message.delete()
          return message.channel.send(BanEmbed).catch((error) => { console.log(error.message) });
        }
        if(!member.bannable) {
                var EmbedBan = new Discord.RichEmbed()
                .setDescription(`❓ | Je ne peux pas interdire cet utilisateur! Ont-ils un rôle plus élevé? Ai-je des droits BAN_MEMBERS?`)
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
            message.delete()
                return message.channel.send(EmbedBan).catch((error) => { console.log(error.message) });
        }
    
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "Aucune raison fournie.";
        
        member.ban(reason)
          .catch(error => message.reply(` ❓ | Désolé ${message.author} Je ne peux pas interdire à cause de: ${error}`));
          message.channel.send(new Discord.RichEmbed()
          .addField(`🤖 | Ban effectué`, `${message.mentions.members.first()} a été banni par <@` + message.member.id + `>. car: ${reason}`)
          .setColor(color)
          .setTimestamp()
          .setFooter(footer, footer2)).catch((error) => { console.log(error.message) });
    }     
    
    if(message.content.startsWith(prefix + "kick")){
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            var KickEmbed = new Discord.RichEmbed()
                .setDescription(`❗ | Vous n'avez pas la permission !`)
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
                message.delete()
           return message.reply(KickEmbed).catch(console.log("permission = null"));
       }
        if(message.mentions.users.size === 0) {
            var KickEmbed = new Discord.RichEmbed()
              .setDescription(`❓ | Merci de mentionner l'utilisateur à expluser`)
              .setColor(color)
              .setTimestamp()
              .setFooter(footer, footer2)
          message.delete()
           return message.reply(KickEmbed).catch(console.log("mention = null"));
       }
        let kickMember = message.guild.member(message.mentions.users.first());
         if(!kickMember) {
            var EmbedKick = new Discord.RichEmbed()
            .setDescription(` ❓ | Cet utilisateur est introuvable ou impossible à expulser.`)
            .setColor(color)
            .setTimestamp()
            .setFooter(footer, footer2)
            message.delete()
              return message.reply(EmbedKick).catch(console.log("perm = null"));
        }
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            var EmbedKick = new Discord.RichEmbed()
            .setDescription(` ❓ | Je n'ai pas la permission KICK_MEMBERS pour faire ceci.`)
            .setColor(color)
            .setTimestamp()
            .setFooter(footer, footer2)
            message.delete()
            return message.reply(EmbedKick).catch(console.log("KICK_MEMBERS = null"));
        }
         kickMember.kick().then(member => {
            var EmbedKick = new Discord.RichEmbed()
            .addField(`🤖 | Kick effectué`, `**${message.mentions.members.first()}** a été expulsé du discord par <@` + message.member.id + `>.`)
            .setColor(color)
            .setTimestamp()
            .setFooter(footer, footer2)
            message.delete()
        message.channel.send(EmbedKick).catch(console.log("Expulsion reussie"))});
    }

});

client.on('guildMemberAdd', member => {
    member.addRole(member.guild.roles.find("name", "Joueur"));
    var MemberJoinEmbed = new Discord.RichEmbed()
        .addField(`Nous sommes désormais **${member.guild.memberCount}** sur le serveur :white_check_mark:`,`Bienvenue à toi, ${member.displayName} sur le Discord **${member.guild.name}.**\n`)
        .setColor(color)
        .setTimestamp()
        .setFooter(footer, footer2)
    member.guild.channels.find("name","🛫𝘿𝙊𝙐𝘼𝙉𝙀𝙎").send(MemberJoinEmbed);
});

client.on("guildMemberRemove", member => {
    var MemberLeaveEmbed = new Discord.RichEmbed()
        .addField(`Nous sommes désormais **${member.guild.memberCount}** sur le serveur :x:`,`${member.displayName} a quitté **${member.guild.name} :x:**\n`)
        .setColor(color)
        .setTimestamp()
        .setFooter(footer, footer2)
  member.guild.channels.find("name", "🛫𝘿𝙊𝙐𝘼𝙉𝙀𝙎").send(MemberLeaveEmbed);
});

client.on("guildMemberAdd", member => {
    var role = member.guild.roles.find("name", "Joueur");
    member.addRole(role)
});

client.on('message', message => {

    if(message.content === prefix + "info") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information sur le Discord")
        .addField("Nom du serveur Discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as le", message.member.joinedAt)
        .addField("Nombre d'utilisateur sur le Discord", message.guild.memberCount)
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)

    }

    if (message.content.startsWith(prefix + "sondage")) {
        if(message.author.id == "331127518394449920"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Question: ")
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou ❌")
                .setColor("0xB40404")
                .setTimestamp()
            message.guild.channels.find("name", "💫𝙎𝙊𝙉𝘿𝘼𝙂𝙀").sendEmbed(embed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
            }).catch(function() {
            });
            }else{
                return message.reply("Tu n'as pas la permission de faire ceci.")
}}})
////////////////////////
//////////////////////// Ticket
////////////////////////
client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
      
        if (message.content.toLowerCase().startsWith(prefix + `help`)) {
          const embed = new Discord.RichEmbed()
          .setTitle(`:mailbox_with_mail: | LacosteRP Support`)
          .setColor(0xCF40FA)
          .setDescription(`Je vous présente les commandes support. C'est à dire les commandes qui vous aideront en cas d'éventuel besoin.`)
          .addField(`Tickets`, `[${prefix}open ticket]() > Ouvre un nouveau ticket et préviens le staff.\n[${prefix}close]() > Ferme un ticket résolu ou ouvert par accident.`)
          message.channel.send({ embed: embed });
        }

    if (message.content.toLowerCase().startsWith(prefix + `open ticket`)) {
      const reason = message.content.split(" ").slice(1).join(" ");
      if (!message.guild.roles.exists("name", "LacosteRP")) return message.channel.send(`Ce serveur n’a pas de rôle \`LacosteRP\`, donc le ticket ne sera pas ouvert. \nSi vous êtes un administrateur, créez-en un avec ce nom exactement et donnez-le aux utilisateurs qui devraient pouvoir voir les tickets .`);
      if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`Vous avez déjà un ticket d'ouvert !`);
      message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
          let role = message.guild.roles.find("name", "LacosteRP");
          let role2 = message.guild.roles.find("name", "@everyone");
          c.overwritePermissions(role, {
              SEND_MESSAGES: true,
              READ_MESSAGES: true
          });
          c.overwritePermissions(role2, {
              SEND_MESSAGES: false,
              READ_MESSAGES: false
          });
          c.overwritePermissions(message.author, {
              SEND_MESSAGES: true,
              READ_MESSAGES: true
          });
          message.channel.send(`${message.author.username} | :white_check_mark: Votre ticket à bien été crée, #${c.name}.`);
          const embed = new Discord.RichEmbed()
          .setColor(0xCF40FA)
          .addField(`Salut ${message.author.username}!`, `Essayez d’expliquer pourquoi vous avez ouvert ce ticket avec le plus de détails possible. Notre **Staff** sera bientôt là pour vous aider.`)
          .setTimestamp();
          c.send({ embed: embed });
      }).catch(console.error);
  }
  if (message.content.toLowerCase().startsWith(prefix + `close`)) {
      if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Vous ne pouvez pas utiliser la commande de fermeture en dehors d'un canal de ticket.`);
  
      message.channel.send(`Êtes-vous sûr? Une fois confirmée, vous ne pouvez plus annuler cette action! \nPour confirmer, tapez \`-jeconfirme\`. Cela expirera dans 10 secondes et sera annulé.`)
      .then((m) => {
        message.channel.awaitMessages(response => response.content === '-jeconfirme', {
          max: 1,
          time: 10000,
          errors: ['time'],
        })
        .then((collected) => {
            message.channel.delete();
          })
          .catch(() => {
            m.edit('La fermeture du ticket a expiré, le ticket na pas été fermé.').then(m2 => {
                m2.delete();
            }, 3000);
          });
      });
  }
  
});
///////////////////////////////
////////// REGLES D ///////////
///////////////////////////////
client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

        if (message.content === prefix + "regled"){
          var embed = new Discord.RichEmbed()
          .setTitle("📃 | Règles du Discord")
          .setDescription("**Aucun avertissement ne sera donné. Le ban arrivera directement en cas de non respect des règles.**")
          .addField("📕 **GÉNÉRALE:**",` Le STAFF du serveur Discord se réservent le droit de supprimer tout message à des fins de modération ainsi que de sanctionner toute personne dont le comportement serait jugé néfaste pour le serveur.
          Ce serveur est un serveur public accueillant tout utilisateur souhaitant discuter ou jouer. Les règles sont mises en place afin que vous passiez un agréable moment sur le Discord et notre Serveur.
          Réfléchissez bien avant d'enfreindre le règlement.`)
          .addField("📕 **CONTENU EXTRÊME:**",` Gardez à l'esprit que des utilisateurs de tout âge utilisent ce serveur. Nous voulons que notre serveur Discord soit un océan de paix et de sérénité pour tout le monde.
          Nous ne voulons pas de nudité ou tout autre contenu inapproprié, les liens Twitter vers les nudes de ta meuf ou encore les liens vers des contenus bien sanglant seront supprimés et vous serez banni.
          Pas besoin d'une liste exhaustive de ce que vous n'avez pas le droit de poster. Faites juste preuve de bon sens, merci.`)
          .addField("📕 **MENACES:**",` Nous tolérons les langages légèrement grossier, mais pas les menaces/insultes gratuites visant à intimider les personnes présentes dans votre salon vocal/textuel.`)
          .addField("📕 **PUBLICITÉ:**",` Ce discord n'est pas un endroit pour promouvoir sa chaîne YouTube ou vendre votre produit.
          Les messages essayant de solliciter tout et n'importe quoi seront supprimés.
          Les récidivistes seront bannis.`)
          .addField("📕 **SPAM:**",` Ne spammez pas les salons textuels. \nNe mettez pas 30 emoji dans une phrase, 1 suffis. \nGardez en tête que les Admins du serveur ne sont pas là pour gérer des enfantillages. \nToutes ces règles s'appliquent également aux personnes gradées sur le serveur.`)
          .setColor(color)
          .setTimestamp()
          .setFooter(footer, footer2)
          message.delete() 
        message.channel.send(embed);
    }
});
////////////////////////////
//////// IMG ALEA../////////
////////////////////////////
client.on("message", async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (message.content === prefix + "chat"){
        let msg = await message.channel.send("Cherche...")

        let {body} = await superagent
        .get('https://aws.random.cat/meow')
        //console.log(body.file)
        if(!{body}) return message.channel.send("Je n'ai pas réussis, réssaye.")

            let cEmbed = new Discord.RichEmbed()
            .setColor(colours.cyan)
            .setAuthor(`Zid Ecovitch | Fukstaz`, message.guild.iconURL)
            .setImage(body.file)
            .setTimestamp()
            .setFooter(`Zid Ecovitch | Fukstaz`, client.user.displayAvatarURL)

            message.channel.send({embed: cEmbed})

            msg.delete();

    }

});

client.login(token);
