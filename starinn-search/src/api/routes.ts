import { Router } from 'express';
import { searchDocuments } from './controllers';

const router = Router();

// Define the search route
router.get('/search', searchDocuments);

export default router;