import axios from 'axios';
import { JSDOM } from 'jsdom';
import { Document } from './models/document';
import { saveDocument } from './services/search';

const CRAWL_DELAY = 2000; // Delay between requests in milliseconds

async function crawl(url: string): Promise<void> {
    try {
        const response = await axios.get(url);
        const { document } = (new JSDOM(response.data)).window;

        const title = document.querySelector('title')?.textContent || '';
        const body = document.body.textContent || '';

        const newDocument: Document = {
            title,
            body,
            url,
            createdAt: new Date(),
        };

        await saveDocument(newDocument);
        console.log(`Document saved: ${title}`);

        // Delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, CRAWL_DELAY));
    } catch (error) {
        console.error(`Error crawling ${url}:`, error);
    }
}

async function startCrawling(urls: string[]): Promise<void> {
    for (const url of urls) {
        await crawl(url);
    }
}

export { startCrawling };