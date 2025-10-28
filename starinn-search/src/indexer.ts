// src/indexer.ts

import fs from 'fs';
import path from 'path';
import { Document } from './models/document';
import { Database } from './config/index'; // Assuming you have a database connection setup

const corpusPath = path.join(__dirname, '../data/corpus.json');

export class Indexer {
    private documents: Document[];

    constructor() {
        this.documents = [];
    }

    public loadDocuments(): void {
        const data = fs.readFileSync(corpusPath, 'utf-8');
        this.documents = JSON.parse(data);
    }

    public indexDocuments(): void {
        this.loadDocuments();
        this.documents.forEach(doc => {
            // Assuming you have a method to save documents to the database
            Database.saveDocument(doc);
        });
    }
}

// Usage
const indexer = new Indexer();
indexer.indexDocuments();