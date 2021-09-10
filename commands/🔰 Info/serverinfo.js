const Discord = require("discord.js");
const {MessageEmbed} = require("discord.js");
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
const emoji = require(`../../botconfig/emojis.json`);
const moment = require('moment');

const filterLevels = {
  DISABLED: 'Off',
  MEMBERS_WITHOUT_ROLES: 'No Role',
  ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
  NONE: 'None',
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: '(╯°□°）╯︵ ┻━┻',
  VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
  brazil: 'Brazil',
  europe: 'Europe',
  hongkong: 'Hong Kong',
  india: 'India',
  japan: 'Japan',
  russia: 'Russia',
  singapore: 'Singapore',
  southafrica: 'South Africa',
  sydeny: 'Sydeny',
  'us-central': 'US Central',
  'us-east': 'US East',
  'us-west': 'US West',
  'us-south': 'US South'
};

module.exports = {
  name: "serverinfo",
  aliases: ["sinfo"],
  category: "🔰 Info",
  description: "Shows info about a server",
  usage: "serverinfo",
  run: async (client, message, args, cmduser, text, prefix) => {
    try {
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;

      message.channel.send(new Discord.MessageEmbed()
      .setDescription(`**Server Info**`)
      .setColor('BLACK')
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
 
      .addField(`Name:` , ` ${message.guild.name}`, true )
      .addField(`ID: ` , `${message.guild.id}`, true )
      .addField(`Owner: ` , `<@535119428678057984>`, true )
      .addField(`Region:` , ` ${regions[message.guild.region]}`, true )
      .addField(`Boost Tier:` , ` ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`, true )
      .addField(`Verification Level:` , ` ${verificationLevels[message.guild.verificationLevel]}`, true )
      .addField(`Time Created: ` , `${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}]`, true )

 
      .addField(`Role Count:` , `${roles.length}`, true )
      .addField(`Emoji Count:` , ` ${emojis.size}`, true )
      .addField(`Regular Emoji Count: ` , `${emojis.filter(emoji => !emoji.animated).size}`, true)
      .addField(`Animated Emoji Count:` , ` ${emojis.filter(emoji => emoji.animated).size}`, true)
      .addField(`Member Count: ` , `${message.guild.memberCount}`, true)
      .addField(`Text Channels: ` , `${channels.filter(channel => channel.type === 'text').size}`, true)
      .addField(`Voice Channels:` , ` ${channels.filter(channel => channel.type === 'voice').size}`, true)
      .addField(`Boost Count: ` , `${message.guild.premiumSubscriptionCount || '0'}`, true)

    .addField(`Role List [${roles.length - 0}]`, roles.join(', '))   
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL({
          dynamic: true
        })));
    } catch (e) {
      console.log(String(e.stack).bgRed)
      return message.channel.send(new MessageEmbed()
        .setColor(ee.wrongcolor)
        .setFooter(ee.footertext, ee.footericon)
        .setTitle(`${emoji.msg.ERROR} ERROR | An error occurred`)
        .setDescription(`\`\`\`${e.message}\`\`\``)
      );
    }
  }
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
