const { MessageEmbed } = require('discord.js')
const message = require('../../events/guild/message')

module.exports = {
    name: "bot",
    run: async(client, message, args) => {


        const embed = new MessageEmbed()
        .setTitle("bot stats")
        .setColor('#ffffff')
        .addFields(
            {
                name: "🌐Servers",
                value: `Serving ${client.channels.cache.size} channels`
            },
            {
                name: "😊Users",
                value: `Watching over ${client.users.cache.size} users`
            },
            {
                name: "📆Creation date",
                value: `I was created at ${client.user.createdAt}`
            },
            {
                name: "📥Latency",
                value: `My Latency is ${Math.round(client.ws.ping)}`

            }
        )
        .setFooter(`Invoked by ${message.author.id}`)
        message.channel.send(embed)
    }
}
