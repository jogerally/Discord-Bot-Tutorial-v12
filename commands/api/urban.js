/*
https://api.urbandictionary.com/v0/define 
*/
const { MessageEmbed } = require('discord.js');
const querystring = require('querystring');
const fetch = require('node-fetch'); //Dont have to use all of them but ima use all of em
const { listenerCount } = require('process');

module.exports = {
    name: "urban",
    run: async(client, message, args) => {
        if (!args.length) {
            return message.channel.send('what am i searching')
        }
        const query = querystring.stringify({ term: args.join(' ') });

        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

        if (!listenerCount.length) {
            return message.channel.send('No results found')
        }

        message.channel.send(list[0].definition);

        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

        const [answer] = list;

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(answer.word)
        .setURL(answer.permalink)
        .addFields(
            { name: 'definition', value: trim(answer.definition, 1024)},
            { name: 'example', value: trim(answer.example, 1024)}
        );
        message.channel.send(embed)
    }
}
