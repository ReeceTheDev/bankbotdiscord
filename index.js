const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const Discord = require("discord.js")
const db = require("quick.db")
require("discord-reply")
const client = new Discord.Client()
const { prefixes } = require("./config.json")
const fs = require('fs');
const moment = require("moment")

client.commands = new Discord.Collection();

const commandFiles = fs
	.readdirSync('./commands/')
	.filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}
client.on('ready', () => {
	console.log(`The bot is now online`);
});


client.on("message", message => {
 	if (!message.content.toLowerCase().startsWith(prefixes) || message.author.bot)
		return;
  const user =  message.autor
  const xp = db.get(`xp_${message.author.id}`)
  let level = db.get(`level_${message.author.id}`)

	if (
		message.content.includes('@here') ||
		message.content.includes('@everyone')
	)
		return;

	const args = message.content
		.slice(prefixes.length)
		.trim()
		.split(' ');
	const command = args.shift().toLowerCase();
	if (message.guild === null) {
		let embed = new Discord.MessageEmbed()
			.setTitle('Error >:(')
			.setColor('RED')
			.setFooter('Error')
			.setTimestamp()
			.setDescription('Send a command in a server smh');
		return message.channel.send(embed);
	} else {
    let blacklist = db.get(`blacklist_${message.author.id}`)
    if(!blacklist || blacklist === null) {
      if (
			command.toLowerCase() === 'balance' ||
			command.toLowerCase() === 'bal' ||
			command.toLowerCase() === 'networth' ||
			command.toLowerCase() === 'nw'
		) {
			client.commands.get('balance').execute(message, args);
    }
    if(command.toLowerCase() === "askbankbot") {
      client.commands.get("askbankbot").execute(message, args)
    }
    if(command.toLowerCase() === "google" || command.toLowerCase() === "search") {
      client.commands.get(`search`).execute(client, message)
    }
    if(command.toLowerCase() === "report") {
      client.commands.get("report").execute(client, message, args)
    }
    if(command.toLowerCase() === "youtubekids") {
      message.channel.send("https://streamable.com/5pdqpp")
    }
    if(command.toLowerCase() === "removemoney") {
      client.commands.get("removemoney").execute(message, args)
    }
    if(command.toLowerCase() === "suggest") {
      client.commands.get(`suggest`).execute(client, message, args)
    } 
    if(command.toLowerCase() === "marketplace" || command.toLowerCase() === "mp") {
      client.commands.get("marketplace").execute(client, message, args)
    }
    if(command.toLowerCase() === "beautifull") {
      client.commands.get("beautifull").execute(client, message, args)
    }
		if (command.toLowerCase() === 'daily') {
			client.commands.get('daily').execute(message, args);
		}
    if(command.toLowerCase() === "invite") {
      message.channel.send("Invite me to your server ➜ https://dsc.gg/bankbot")
    }
    if(command.toLowerCase() === "lp" || command.toLowerCase() === "lisapresentation" || command.toLowerCase() === "lisa" || command.toLowerCase() === "presentation") {
      client.commands.get("lisapresentation").execute(message, args)
    }
    if(command.toLowerCase() === "addmoney") {
      client.commands.get("addmoney").execute(message, args)
    }
    if(command.toLowerCase() === "delete") {
      client.commands.get("delete").execute(message, args)
    }
    if(command.toLowerCase() === "clyde") {
      client.commands.get("clyde").execute(client, message, args)
    }
    if(command.toLowerCase() === "captcha") {
      client.commands.get("captcha").execute(client, message, args)
    }	
    if (
			command.toLowerCase() === 'deposit' ||
			command.toLowerCase() === 'dep'
		) {
			client.commands.get('deposit').execute(message, args);
		}
		if (command.toLowerCase() === 'monthly') {
			client.commands.get('monthly').execute(message, args);
		}
		if (
			command.toLowerCase() === 'withdraw' ||
			command.toLowerCase() === 'wd' ||
			command.toLowerCase() === 'with'
		) {
			client.commands.get('withdraw').execute(message, args);
		}
    if (command.toLowerCase() === 'help') {
			client.commands.get('help').execute(message, args);
		}
    if(command.toLowerCase() === "tweet") {
      client.commands.get("tweet").execute(client, message, args)
    }

		if (command.toLowerCase() === 'shop' || command.toLowerCase() === "store") {
			client.commands.get('shop').execute(message, args);
		}
    if(command.toLowerCase() === "settings") {
      client.commands.get("settings").execute(message, args)
    }
    if(command.toLowerCase() === "set") {
      client.commands.get("set").execute(message, args)
    }
    if (command.toLowerCase() === 'pay') {
			client.commands.get('pay').execute(message, args);
		}
		if (command.toLowerCase() === 'stonks') {
			client.commands.get('stonks').execute(message, args);
		}
    if(command.toLowerCase() === "warn") {
      client.commands.get("warn").execute(message, args)
    }
    if(command.toLowerCase() === "mine") {
      client.commands.get("mine").execute(message, args)
    }
    if(command.toLowerCase() === "facepalm") {
      client.commands.get("facepalm").execute(client, message, args)
    }
		if (command.toLowerCase() === 'beg') {
			client.commands.get('beg').execute(message, args);
		}
    if(command.toLowerCase() === "unmute") {
      client.commands.get(`unmute`).execute(client, message, args)
    }
    if(command.toLowerCase() === "fish") {
      client.commands.get("fish").execute(client, message, args)
    }
		if (command.toLowerCase() === 'work' || command.toLowerCase() === 'job') {
			client.commands.get('work').execute(message, args);
		}
		if (command.toLowerCase() === 'buy') {
			client.commands.get('buy').execute(message, args);
		}
		if (
			command.toLowerCase() === 'inv' ||
			command.toLowerCase() === 'inventory'
		) {
			client.commands.get('inventory').execute(message, args);
		}
		if (command.toLowerCase() === 'sell') {
			client.commands.get('sell').execute(message, args);
		}
		if (command.toLowerCase() === 'use') {
			client.commands.get('use').execute(message, args);
		}
		if (command.toLowerCase() === 'additems') {
			client.commands.get('additems').execute(message, args);
		}
		if (command.toLowerCase() === 'hunt') {
			client.commands.get('hunt').execute(client, message, args);
		}
    if(command.toLowerCase() === "mailbox" || command.toLowerCase() === "mail" || command.toLowerCase() === "mb") {
      client.commands.get("mailbox").execute(client, message, args) //client because we need it for some things, heh
    }
		if (
			command.toLowerCase() === 'start' ||
			command.toLowerCase() === 'starter'
		) {
			client.commands.get('start').execute(message, args);
		}
		if (command.toLowerCase() === 'tax') {
			client.commands.get('tax').execute(message, args);
		}
		if (command.toLowerCase() === 'gift') {
			client.commands.get('gift').execute(message, args);
		}
		if (command.toLowerCase() === 'info') {
			client.commands.get('info').execute(message, args);
		}
		if (command.toLowerCase() === 'weekly') {
			client.commands.get('weekly').execute(message, args);
    }
		if (command.toLowerCase() === 'craft') {
			client.commands.get('craft').execute(message, args);
		}
		if (command.toLowerCase() === 'profile' || command.toLowerCase() === "prof" || command.toLowerCase() === "p") {
			client.commands.get('profile').execute(client, message, args);
		}
    if(command.toLowerCase() === "leaderboard" || command.toLowerCase() === "lb") {
      client.commands.get(`leaderboard`).execute(client, message, args)
    }
    	if (command.toLowerCase() === 'aboutme') {
			client.commands.get('aboutme').execute(message, args);
		}
    if(command.toLowerCase() === "adventure") {
      client.commands.get("adventure").execute(message, args)
    }
    if(command.toLowerCase() === "resetdata") {
      client.commands.get("resetdata").execute(message, args)
    }
    if(command.toLowerCase() === "ban") {
      client.commands.get("ban").execute(client, message, args)
    }
		if (
			command.toLowerCase() === 'profilecolorset' ||
			command.toLowerCase() === 'profilesetcolor' ||
			command.toLowerCase() === 'setprofilecolor' ||
			command.toLowerCase() === 'setcolorprofile' || command.toLowerCase() === "psc") {
			client.commands.get('profilecolorset').execute(message, args);
		}
    if(command.toLowerCase() === "profilesetbanner" || command.toLowerCase() === "profilebannerset" || command.toLowerCase() === "psb" || command.toLowerCase() === "pbs" || command.toLowerCase() === "bannerprofileset" || command.toLowerCase() === "setprofilebanner" || command.toLowerCase() === "pb" || command.toLowerCase() === "profilebanner") {
      client.commands.get(`profilebanner`).execute(client, message, args)
    }
    if(command.toLowerCase() === "stats") {
      client.commands.get("stats").execute(client, message, args)
    }
    if(command.toLowerCase() === "weather") {
      client.commands.get("weather").execute(client, message, args)
    }
		if (command.toLowerCase() === 'promote') {
			client.commands.get('promote').execute(message, args);
		}
    if(command.toLowerCase() === "ping") {
      let embed1 = new Discord.MessageEmbed()
      .setTitle(`Pinging...`)
      .setColor("GREEN")
      let embed = new Discord.MessageEmbed()
      .setTitle(`Ping`)
      .setColor("PURPLE")
      .setDescription(`:alarm_clock: | ${Date.now() - message.createdTimestamp}ms of latency to each response! \n:ping_pong: | Api latency: ${client.ws.ping}ms!`)
      .setTimestamp()
      .setFooter(`Made by Main dev: Cookiee#5729`)
      message.channel.send(embed1).then(message => {
        setTimeout(function() {
          message.edit(embed)
        }, Date.now() - message.createdTimestamp)
      })
    }
    if(command.toLowerCase() === "feedback") {
      client.commands.get("feedback").execute(client, message, args)
    }
    if(command.toLowerCase() === "version") {
      client.commands.get("version").execute(client, message, args)
    }
    if (command.toLowerCase() === 'profiletagset' ||
			command.toLowerCase() === 'profilesettag' ||
			command.toLowerCase() === 'setprofiletag' ||
			command.toLowerCase() === 'settagprofile' || command.toLowerCase() === "pst") {
			client.commands.get('pst').execute(message, args);
    }
    if(command.toLowerCase() === "blacklist") {
      client.commands.get('blacklist').execute(message, args)
    }
    if(command.toLowerCase() === "unblacklist") {
client.commands.get('unblacklist').execute(message, args)
    }
    if(command.toLowerCase() === "demote") {
      client.commands.get('demote').execute(message, args)
    }
    if(command.toLowerCase() === "vip") {
      client.commands.get('vip').execute(message, args)
    }
    if(command.toLowerCase() === "bitshop") {
      client.commands.get('bitshop').execute(message, args)
    }
     if(command.toLowerCase() === "bug") {
      client.commands.get(`bug`).execute(client, message, args)
    }
    if(command.toLowerCase() === "level" || command.toLowerCase() === "rank") {
      client.commands.get(`level`).execute(client, message, args)
    }
    if(command.toLowerCase() === "open") {
      client.commands.get("openmail").execute(message, args)
    }
    if(command.toLowerCase() === "rps") {
      client.commands.get("rps").execute(message, args)
    }
    if(command.toLowerCase() === "meme") {
      client.commands.get("meme").execute(message, args)
    }
    if(command.toLowerCase() === "mute") {
      client.commands.get("mute").execute(message, args)
    }
    if(command.toLowerCase() === "modwarn") {
      client.commands.get("modwarn").execute(message, args)
      }
      if(command.toLowerCase() === "play") {
        client.commands.get("play").execute(client, message, args)
      }
      //level system starts here
       let levelenablecheck = db.get(`levelsystem_${message.guild.id}`)
  if(levelenablecheck === true) {
    let level1 = db.get(`levell_${message.guild.id}_${message.author.id}`)
    let xp = db.get(`xpp_${message.guild.id}_${message.author.id}`)
    let requiredxp = level1 * 250
    if(message.author.id === client.id) {
      return
    }
    else {
    let xpquantity = Math.floor(Math.random() * 8)
    db.add(`xpp_${message.guild.id}_${message.author.id}`, xpquantity)
    if(xp >= requiredxp) {
      let xpmessage = db.get(`xpmessage_${message.author.id}`)
      let level = db.get(`levell_${message.guild.id}_${message.author.id}`) + 1
      let usermention = `<@${message.author.id}>`
      if(!xpmessage) {
        xpmessage = `<@${message.author.id}>, **GG** you just leveled up! You are now level **${level}**`
      }
      let nextlevelxp = level * 250
      message.channel.send(xpmessage)
      db.add(`levell_${message.guild.id}_${message.author.id}`, 1)
      db.delete(`xpp_${message.guild.id}_${message.author.id}`)
    }
  }
  }
  else {
    return
  }
    }
    else if(blacklist === true) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Blacklisted`)
      .setColor("RED")
      .setThumbnail("https://cdn.discordapp.com/emojis/833773015388127252.gif?v=1")
      .setTimestamp()
      .setFooter(`error`)
      .setDescription(`You can not use Commands anymore! \n\nYou Were Banned for Breaking <@859112281554944010> Terms of Service! \nIf you believe this is an error, Please contact an official Developer`)
      message.lineReply(embed)
    }
  }
})
client.on("message", async message => {
  if(message.content.includes(client.user.id)) {
    let helpping = db.get(`helpping_${message.author.id}`)
    if(helpping === true) {
      let embed = new Discord.MessageEmbed()
      .setTitle(`:hammer: Help!`)
      .setColor("GREEN")
      .setDescription(`\`\`You pinged me for help!\`\` \n\nHere are some good commands to start with.\n\n**__b!start__**
Gives you a Starter Kit to help you start playing Bank Bot!\n\n**__b!Help Tos__**
Dm's you the Bank Bot TOS that states all the rules!\n\n**__b!Aboutme__**
Create your About Me for your Profile to show the world who you are!\n\n**__b!beg__**
Start begging for coins! :laughing:\n\n**__b!help__**
Gives you more info about Bank Bot.`);
message.lineReply(embed)
    }
    else {
      return
    }
  }
    else if(message.content.toLowerCase() === "my life is ruined") {
      message.channel.send("https://streamable.com/tinbry")
    }
    let vipdate = db.get(`vipdate_${message.author.id}`)
    if(!vipdate) {
      vipdate = new Date()
    }
    //vip date
    let vipyear = moment(vipdate).format("YYYY")
    let vipmonth = moment(vipdate).format("MM")
    //new date generate
    let newdate = new Date()
    let newdatem = moment(newdate).format("MM")
    let newdatey = moment(newdate).format("YYYY")
    //message use
    let usemessage1year = db.get(`1yearusemessage_${message.author.id}`)
    let usemessage3month = db.get(`3monthusemessage_${message.author.id}`)
    let usemessage5month = db.get(`5monthusemessage_${message.author.id}`)
    //vipbadges
    let oneyearvipbadge = db.get(`vipbadge1y_${message.author.id}`)
    let fivemonthvipbadge = db.get(`vipbadge5m_${message.author.id}`)
    let threemonthvipbadge = db.get(`vipbadge3m_${message.author.id}`)
    //conditions / uses
    if(!usemessage3month) {
      if(newdatem - vipmonth === 03 || newdatem - vipmonth === 3) {
        if(!threemonthvipbadge && !fivemonthvipbadge && !oneyearusemessage_$) {
          db.add(`3monthusemessage_${message.author.id}`, 1)
          db.set(`vipbadge3m_${message.author.id}`, true)
          db.add(`legendarybox_${message.author.id}`, 3)
          db.add(`money_${message.author.id}`, 200000)
          let embed = new Discord.MessageEmbed()
          .setTitle(`Nice!`)
          .setDescription(`You've been a vip member for 3 months <:Bank_Badge_Vip3m:855261296466984990>! as a reward you got \`\`3\`\` legendary boxes and \`\`200,000₿\`\``)
          .setColor("PURPLE")
          .setThumbnail("https://cdn.discordapp.com/emojis/855261296466984990.png?v=1")
          message.lineReplyNoMention(embed)
        }
      }
    }
    if(!usemessage5month) {
      if(newdatem - vipmonth === 05 || newdatem - vipmonth === 05) {
        if(!fivemonthvipbadge && !oneyearvipbadge) {
          db.add(`5monthusemessage_${message.author.id}`, 1)
          db.delete(`vipbadge3m_${message.author.id}`)
          db.set(`vipbadge5m_${message.author.id}`, true)
          db.add(`legendarybox_${message.author.id}`, 5)
          db.add(`money_${message.author.id}`, 350000)
          let embed = new Discord.MessageEmbed()
          .setTitle(`E`)
          .setDescription(`Oh nice! you've been a vip member for 5 months <:Bank_Badge_Vip5m:856227710061772800>! as a reward you got \`\`5\`\` legendary boxes and \`\`350,000₿\`\``)
          .setColor("PURPLE")
          .setThumbnail("https://cdn.discordapp.com/emojis/856227710061772800.png?v=1")
          message.lineReplyNoMention(embed)
        }
      }
    }
    if(!usemessage1year) {
    if(newdatey - vipyear === 1) {
      db.delete(`vipbadge5m_${message.author.id}`)
      db.add(`1yearusemessage_${message.author.id}`, 1)
      db.set(`vipbadge1y_${message.author.id}`, true)
      let embed = new Discord.MessageEmbed()
      .setTitle(`oh my...`)
      .setDescription(`Wow... no words to describe this moment. Just thank you so much for supporting bank bot for over a year <:Bank_Badge_Vip1y:856272896359399446>! As a reward for this amazing time, you got \`\`5\`\` legendary boxes <:Bank_Item_LegendaryBox:856194285610074122>, \`\`1\`\` boosting boxes <:Bank_Item_BoostingBox:856270203503509565> and \`\`500,000 ₿\`\``)
      .setColor("PURPLE")
      .setThumbnail("https://cdn.discordapp.com/emojis/856272896359399446.png?v=1")
      message.lineReplyNoMention(embed)
      db.add(`legendarybox_${message.author.id}`, 5)
      db.add(`boostingbox_${message.author.id}`, 1)
      db.add(`money_${message.author.id}`, 500000)
    }
    }
    if(message.content === "CVISFC") {
    if(message.member.id === "773620575155388457") {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Verify <a:Bank_Item_Booster:848638950038044723>`)
        .setColor("PURPLE")
        .setDescription(`To unlock the support server, please use the command \`\`b!verify\`\` \n\n*Attention: the emoji below this gives you nothing, it is just for asthetic*`)
        .setFooter(``)
        message.channel.send(embed).then(message => {
          message.react("848638950038044723")
        })
      }
      else return
    }
    else if(message.content.toLowerCase() === "b!verify") {
      if(message.channel.id === "849025029996019763") {
        message.delete()
        message.member.roles.add("834564271407890453")
      }
      else return
    }
    if(message.channel.id === "849025029996019763") {
      if(message.content.toLowerCase() !== "b!verify") {
        message.delete()
      }
    }
    if(message.content.toLowerCase() === "@someone") {
      let user = message.author
      let vip = db.get(`vip_${user.id}`)
      let usedalreadyatsomeone = db.get(`usedalreadyatsomeone_${message.author.id}`)
      if(usedalreadyatsomeone === true) {
        message.lineReply(`:octagonal_sign: Please Do not spam this!`)
      }
      else {
      if(vip === true) {
      let members = await message.guild.members.fetch();
      let randMember = members.random();
      message.delete()
      db.set(`usedalreadyatsomeone_${user.id}`, true)
      message.channel.send(`${randMember}`).then(message => {
        setTimeout(function() {
        db.delete(`usedalreadyatsomeone_${user.id}`)
        }, 7000)
      })
      }
      }
    }
})
client.on('guildMemberUpdate', (oldMember, newMember) => {

    if (!oldMember.roles.cache.has("834564271407890453") && newMember.roles.cache.has("845016726273392641")) {
    let vip = db.get(`vip_${newMember.id}`)
    const channel = client.channels.cache.find(channel => channel.id === "843097982815436820")
    let embed = new Discord.MessageEmbed()
    .setTitle(`${newMember} boosted the server`)
    .setColor("PURPLE")
    .setFooter(`New boost!`)
    .setDescription(`Congratulations! Type the command \`\`b!vip\`\` or in case you already have vip, check your \`\`b!inv\`\``)
      if(!vip) {
    db.set(`vip_${newMember.id}`, true)
      }
      else if(vip === true) {
        let random = Math.floor(Math.random() * 3) + 1;
        db.add(`goldensticker_${newMember.id}`, random)
      }
    channel.send(embed);
    newMember.cache.roles.add("845711773046931477")
  }
});

client.on('guildCreate', guild => {
	let channelID;
	let channels = guild.channels.cache;

	channelLoop: for (let key in channels) {
		let c = channels[key];
		if (c[1].type === 'text') {
			channelID = c[0];
			break channelLoop;
		}
	}

	let channel = guild.channels.cache.get(guild.systemChannelID || channelID);
	const newserverjoinembed = new Discord.MessageEmbed()
		.setTitle('Hello!')
		.setDescription(
			'Hey there! Thank you for inviting Bank Bot to your server! If need any help with commands the just type `b!help` and you will know all of the commands you need to know, and you will have fun with the bot!')
		.setColor('PURPLE')
		.setFooter('Thanks For Adding Bank Bot | Handled By Reece_')
		.setTimestamp()
	channel.send(newserverjoinembed);
  db.set(`moderation_${guild.id}`, true)
  db.set(`fun_${guild.id}`, true)
  db.set(`levelsystem_${guild.id}`, true)
});
client.on('ready', () => {
  setInterval(() => {
	client.user.setActivity(
		`b!help | Watching ${client.guilds.cache.size} servers and ${client.users.cache.size} users`,
		{ type: 'WATCHING' }
	)
  }, 15000)
});
client.on("ready", () => {
  setInterval(() => {
  let aboutme = `<:Bank_Dev_Added:834885636593811496> Owner of Bank Bot <:Bank_Item_FireLiquid:836693195369742386> ${client.guilds.cache.size} servers and ${client.users.cache.size} users, wow! <a:Bank_Item_Booster:848638950038044723>`
  db.set(`aboutme_${`773620575155388457`}`, aboutme)
  }, 15000)
})

client.on("ready", () => {
  setInterval(() => {
    let random = [
      "Sunny",
      "Rainy",
      "Winter"
    ]
    let randomm = Math.floor(Math.random() * random.length)
    db.set(`weather_${client.id}`, random[randomm])
  }, 21600000)
})
const mySecret = process.env['token']

client.login(mySecret)
