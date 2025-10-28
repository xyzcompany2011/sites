import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { routes } from './api/routes';
import { config } from './config';

const app = express();
const PORT = config.port || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
mongoose.connect(config.databaseUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

// API routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});