/* Copyright (C) 2020 farhan-dqz,
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const sew = require('../config');

const Language = require('../language');
const Lang = Language.getString('filters');

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));

Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));


Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(sew.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919895828468@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['wow','va','uyir','trance','ta','some','she','sebin','se','ra','power','pha','oi','no','nanba','muth','mu','messi','maman','kiss','king','kayari','ho','hot','ga','dey','aliya','player','chatho','Ariyilla','varunnilla','Pic','undo','Njan','song','welcome','Asna','Raifa','Shidu','Missing','mind','morning','set','Criminal','Entry','Thyr','Admin','kundan','ay','muthe','mass','its me','Cr7','Tone','Messi','item','Annan','Azaru','Ada','Hi','Hii','sad','Myre','Mrng','Da','WELCOME','Left','Link','Ok','Aliya', 'Pova','Myr','setta','range','Mood','love','Ninde','you','poli','Happy','girl','Andi','chadhi','Aara','Bot','But y','Haha','Ithentha','Ivanetha','Safeer','Sorry','Thug','Power','Lala','Thamasha','La ba','Poweresh','Fek','Messi','Boss','Avastha','Aarulle','Ayn','Aysheri','Sed','Helo','awm','Wait','Kar98','.help','Ennitt','.alive','Baby','Venda','Sry','Set aano','Potta','Ok da','Nallath','Music','Kozhi','Hehe','Evide','Pova','Bye','Ready','bgm','Bro','command','help','Hlo','mp3','img','sticker','tts','video','wait']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});
}
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
