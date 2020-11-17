const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'stats',
    description: 'Check how many servers or users have bot',
    permissions: 'Member',
	run: async(client, message, args) => {
        const uptime = process.uptime();
        const days = Math.floor((uptime % 31536000) / 86400);
        const hours = Math.floor((uptime % 86400) / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.round(uptime % 60);
        const botuptime = (days > 0 ? days + " days, ":"") + (hours > 0 ? hours + " hours, ":"") + (minutes > 0 ? minutes + " minutes, ":"") + (seconds > 0 ? seconds + " seconds":"")
        message.channel.send(new MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }),)
        .setColor('RANDOM')
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(` • **Uptime:** \`${botuptime}\`\n • **Ping:** \`${Math.floor(client.ws.ping)}ms\`\n\n • **Servers:** \`${client.guilds.cache.size}\`\n • **Users:** \`${eval(client.guilds.cache.map(g => g.members.cache.filter(m => !m.user.bot).size).join(' + '))}\`\n •**Bots:** \`${eval(client.guilds.cache.map(g => g.members.cache.filter(m => m.user.bot).size).join(' + '))}\`\n •**Channels:** \`${client.channels.cache.size}\`\n • **Emojis:** \`${client.emojis.cache.size}\``)
        .setFooter(`Invoked by ${message.author.tag}`));
    }
};
