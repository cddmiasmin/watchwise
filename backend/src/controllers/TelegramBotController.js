import _ from 'lodash';
import { apiTelegram, menu, telegramAllowedUsers, telegramPassword, webhookUrlTelegram } from '../telegram-bot.js';
import { respondToTelegramMessage } from '../functions/TelegramBot.js';

const TelegramBotController = {

    async processTelegramMessage(rep, res) {
        const chatID = rep.body.message.chat.id;
        const chatName = rep.body.message.first_name;
        const message = rep.body.message.text;
        const callack = rep.body?.callback_query || null;

        console.log('---BOT', chatID, message, callack, '\n', rep.body);

        await respondToTelegramMessage(chatID, chatName, message, callack, true);

        // const havePermission = _includes(telegramAllowedUsers, chatID);
        // const validatePassword = _.includes(text.toLowerCase(), telegramPassword.toLowerCase());

        // if(havePermission && validatePassword) {
        //     if(text === '/menu'|| text === '/start') respondToTelegramMessage({ chat_id: chatID, text: menu });
        //     else analyzeMessage(text, chatID);
        // } else respondToTelegramMessage({
        //     chat_id: chatID,
        //     text: 'Olá! 😊 Este bot é de uso privado e está disponível apenas para usuários autorizados. \nAgradecemos sua compreensão 💙' 
        // }, chatID);

        res.send();
    },

    async setWebhookUrl() {
        const url = apiTelegram + '/setWebhook?url=' + webhookUrlTelegram;
        const headers = { accept: 'application/json' }
        const res = await fetch(url, headers);
        console.log('res:', res.status === 200 ? 'WEBHOOK OK' : res);
    }

};

export default TelegramBotController;

// const SearchMovie = async (hasLink, request, hostname) => {
//     let query = hasLink ? await Twitter() : request; 
//     const result = SearchService.Movie(query);
//     const data = result.results[0];
//     const title = `🎬 Título: ${data.title}` + data.title === data.original_title ? '': `\nTítulo Original: ${data.title}`;
//     const year = new Date(data.release_date).setFullYear();
//     return {
//         chat_id: '',
//         text: `${title}\n📅 Ano: ${year}\n⭐ Deseja adicionar esse filme à lista conjunta?`,
//         reply_markup: {
//           inline_keyboard: [
//             [
//               { text: "✅ Confirmar", callback_data: `confirm|${movieId}|Joint_Watchlist` },
//               { text: "❌ Cancelar", callback_data: `cancel` }
//             ]
//           ]
//         }
//     }
// }

// const analyzeMessage = async(message, chatID) => {
//     const brokenWords = _.words(message);

//     const command = brokenWords[0];
//     let request, response, hasLink, hostname = '';

//     const regex = /(https?:\/\/[^\s]+)/g;

//     const requestAux = message.match(regex);

//     if (requestAux && requestAux.length > 0) {
//         hasLink = true;
//         request = requestAux;
//         const urlObj = new URL(requestAux);
//         hostname = urlObj.hostname;
//     }
//     else {
//         hasLink = false;
//         request = _.join(_.slice(brokenWords, 2), ' ');
//     }
    
//     switch (command) {
//         case 'link':
//             response = await SearchMovie(hasLink, request, hostname);
//             break;
//         default:
//             response = {
//                 chat_id: '',
//                 text: '🤔 Opa! Não consegui entender o que você quis dizer.\nTente novamente ou digite /menu para ver os comandos disponíveis.'
//             }
//     }

//     response.chat_id = chatID;
//     respondToTelegramMessage(response);
// }

// const respondToTelegramMessage = async (response) => {
//     const url = '' + '/sendMessage';

//     await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(response),
//         headers: { 'Content-Type': 'application/json' }
//     });
// }