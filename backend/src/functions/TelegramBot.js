import _ from 'lodash';
import TelegramBot from "node-telegram-bot-api";
import { TELEGRAM_TOKEN, apiTelegram } from "../telegram-bot.js";

const messageHaveAList = (message) => {
    const index = message.indexOf('*');

    if(index === -1) return {'has': false}

    const rest = message.slice(index + 1).trim();
    const words = rest.split(' ');
    const list = words[0];
    
    return {has: true, list: list};
}

const messageHaveALink = (message) => {
    const regex = /(https?:\/\/[^\s]+)/g;

    const possibleLink = message.match(regex);

    if (possibleLink && possibleLink.length > 0) {
        const urlObj = new URL(possibleLink);
        const hostname = urlObj.hostname;
        return {has: true, link: {url: possibleLink, hostname: hostname}}
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
        return {has: false, text: text}
    }
}

export const respondToTelegramMessage = async (chatID, chatName, message, callack, access) => {

    const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

    bot.onText(/\/helloworld/, (message) => {
        console.log(message)
        bot.sendMessage(chatID, `Hello World, ${chatID}`);
    });

    bot.onText(/\/addmovie (.+)/, (message) => {

        const list = messageHaveAList(message)
        const text = messageHaveALink(message, list);
        
        bot.sendMessage(chatID, `Comando: /addmovie \n${list.has ? `Lista: ${list}`: ''} \nTexto: ${text}`);
    });

}