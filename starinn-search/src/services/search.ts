import { Document } from '../models/document';
import { Tokenizer } from '../utils/tokenizer';

class SearchService {
    private documents: Document[];

    constructor(documents: Document[]) {
        this.documents = documents;
    }

    public search(query: string): Document[] {
        const tokens = Tokenizer.tokenize(query);
        return this.documents.filter(doc => this.matches(doc, tokens));
    }

    private matches(document: Document, tokens: string[]): boolean {
        const content = document.title + ' ' + document.body;
        return tokens.every(token => content.toLowerCase().includes(token.toLowerCase()));
    }
}

export default SearchService;