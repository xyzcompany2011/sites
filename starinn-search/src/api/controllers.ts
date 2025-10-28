import { Request, Response } from 'express';
import { searchDocuments } from '../services/search';

// Controller for handling search requests
export const searchController = async (req: Request, res: Response) => {
    try {
        const query = req.query.q as string;
        const results = await searchDocuments(query);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while searching.' });
    }
};