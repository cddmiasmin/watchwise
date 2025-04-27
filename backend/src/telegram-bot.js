import 'dotenv/config';
import Twitter from '../src/functions/LinkController.js';
import mercadoPlay from '../src/functions/MercadoPlay.js'

export const { NGROK_URL, TELEGRAM_TOKEN } = process.env;
export const apiTelegram = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;
export const webhookUrlTelegram = NGROK_URL + '/webhook/' + TELEGRAM_TOKEN;
export const telegramAllowedUsers = [process.env.TELEGRAM_ID00, process.env.TELEGRAM_ID01];
export const telegramPassword= process.env.TELEGRAM_PASSWORD;
export const menu = '';
export const platform = [
    {'x.com': { hostname: 'Twitter', function: 'Twitter' }},
    {'twitter.com': { hostname: 'Twitter', function: 'Twitter' }},
    {'youtube.com': { hostname: 'Youtube', function: 'Twitter' }},
    {'youtu.be': { hostname: 'Youtube', function: 'Twitter'}},
    {'netflix.com': { hostname: 'Netflix', function: 'Twitter' }},
    {'mercadoplay.com': { hostname: 'Mercado Play', function: 'mercadoPlay' }}
];