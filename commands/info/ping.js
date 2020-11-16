const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'ping',
    description: '✔️ Pong...',
    permissions: 'Member',
	run: async(client, message, args) => {
        message.channel.send('🏓 Pong...').then((msg) => {
            msg.edit(`❗ Pong!`, new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`•**__Bot__ ping:** ${msg.createdTimestamp - message.createdTimestamp}ms\n •**__API__ ping:** ${Math.round(client.ws.ping)}ms`));
          });
    }};
