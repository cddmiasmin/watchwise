import _ from 'lodash';
import TelegramBot from "node-telegram-bot-api";
import { TELEGRAM_TOKEN, apiTelegram } from "../telegram-bot.js";

const messageHaveAList = (message) => {
    const index = message.indexOf('*');

    if(index === -1) return {'hasList': false}

    const rest = message.slice(index + 1).trim();
    const words = rest.split(' ');
    const list = words[0];
    
    return {hasList: true, list: list};
}

const messageHaveALink = (message, list) => {
    const regex = /(https?:\/\/[^\s]+)/g;

    const possibleLink = message.match(regex);
    console.log()

    if (possibleLink && possibleLink.length > 0) {
        const urlObj = new URL(possibleLink);
        const hostname = urlObj.hostname;
        return {hasLink: true, link: {url: possibleLink[0], hostname: hostname}}
    }
    else {
        let brokenWords, text = ''
        if(list.has){
            const [, rest] = message.split('*');
            brokenWords = rest.trim().split(' ');
            text = brokenWords.slice(1).join(' ');
        } else {
            brokenWords = message.trim().split(' ');
            text = brokenWords.slice(1).join(' ');
        }
        return {hasLink: false, text: text}
    }
}

export const respondToTelegramMessage = async (chatID, chatName, message, callack, access) => {

    const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });
    const list = messageHaveAList(message)
    const text = messageHaveALink(message, list);

    bot.onText(/\/helloworld/, (message) => {
        bot.sendMessage(chatID, `Hello World, ${chatID}`);
    });

    bot.onText(/\/addmovie (.+)/, (message) => {
        const movie = {}
        
        bot.sendMessage(chatID, 
            `${list.hasList 
                ? `${chatName}, deseja adicionar ${movie} na sua lista ${list.list}` 
                : `${chatName}, deseja adicionar ${movie}? Se sim, em qual lista?`}`
        );
    });

    bot.onText(/\/removemovie (.+)/, (message) => {
        const movie = {}
        
        bot.sendMessage(chatID, 
            `${list.hasList 
                ? `${chatName}, deseja remover ${movie} na sua lista ${list.list}` 
                : `${chatName}, deseja remover ${movie}? Se sim, em qual lista?`}`
        );
    });

    bot.onText(/\/watchlist/, (message) => {
        const movie = {}
        
        bot.sendMessage(chatID, '');
    });

    bot.onText(/\/downloads/, (message) => {
        const movie = {}
        
        bot.sendMessage(chatID, '');
    });

    bot.onText(/\/setdownloads (.+)/, (message) => {
        const movie = {}
        
        bot.sendMessage(chatID, '');
    });
    
    bot.onText(/\/createlist (.+)/, (message) => {
        bot.sendMessage(chatID, '');
    });

    bot.onText(/\/mylists/, (message) => {
        bot.sendMessage(chatID, '');
    });

    bot.onText(/\/deletelist (.+)/, (message) => {
        bot.sendMessage(chatID, '');
    });

    bot.onText(/\/streamings/, (message) => {
        bot.sendMessage(chatID, '');
    });

    bot.onText(/\/streamlists (.+)/, (message) => {
        bot.sendMessage(chatID, '');
    });

    bot.onText(/\/streamadd (.+)/, (message) => {
        bot.sendMessage(chatID, '');
    });

    bot.onText(/\/streamremove (.+)/, (message) => {
        bot.sendMessage(chatID, '');
    });

    bot.onText(/\/diaryupdate/, (message) => {
        bot.sendMessage(chatID, '');
    });

    bot.onText(/\/diary (.+)/, (message) => {
        bot.sendMessage(chatID, '');
    });

    bot.onText(/\/recommendmovie (.+)/, (message) => {
        bot.sendMessage(chatID, '');
    });

}

const teste = () => {
    const message = '/addmovie https://x.com/cddmiasmin/watchwise/commit/4d0c869945d0121356aac48f2a270e7e7809958d';
    const list = messageHaveAList(message)
    const text = messageHaveALink(message, list);

    return {lest: list, text: text}
}

console.log(teste());