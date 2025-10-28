// Configuration settings for the application
export const config = {
    server: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost',
    },
    database: {
        uri: process.env.DB_URI || 'mongodb://localhost:27017/starinn',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    search: {
        indexPath: process.env.INDEX_PATH || './data/index.db',
        corpusPath: process.env.CORPUS_PATH || './data/corpus.json',
    },
};