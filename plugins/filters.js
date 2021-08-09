/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj

Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/

Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {

        if(Config.BGMFILTER){

        let banned = jid.find( Jid => Jid === message.jid);

        if(banned !== undefined) return

        if (!!message.mention && message.mention[0] == '919895828468@s.whatsapp.net') {

await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})

        }

const array = ['chatho','Hi','Ariyilla','varunnilla','Bot','Pic','undo','Njan','song','welcome','Asna','Raifa','Shidu','Missing','mind','morning','set','Criminal','Entry','Thyr','Admin','kundan','ay','muthe','mass','its me','Cr7','Tone','Messi','item','Annan','Azaru','Ada','Hi','Hii','sad','Myre','Mrng','Da','WELCOME','Left','Link','Ok','Aliya', 'Pova','Myr','setta','range','Mood','love','Ninde','you','poli','Happy','girl','Andi','chadhi','Aara','Bot','But y','Haha','Ithentha','Ivanetha','Safeer','Sorry','Thug','Power','Lala','Thamasha','La ba','Poweresh','Fek','Messi','Boss','Avastha','Aarulle','Ayn','Aysheri','Sed','Helo','awm','Wait','Kar98','.help','Ennitt','.alive','Baby','Venda','Sry','Set aano','Potta','Ok da','Nallath','Music','Kozhi','Hehe','Evide','Pova','Bye','Ready','bgm','Bro','command','help','Hlo','mp3','img','sticker','tts','video','wait']

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
