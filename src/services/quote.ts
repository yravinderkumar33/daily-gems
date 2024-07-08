import quotes from '../data/quotes.json'
import { Share } from '@capacitor/share';

export const fetchQuotes = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(quotes);
        }, 2000)
    })
};

export const shareQuote = async (payload: Record<string, any>) => {
    return Share.share({
        title: "Share this quote with your friends",
        text: `"${payload?.text}" by ${payload?.author}`,
        dialogTitle: "Share"
    })
}