import { searchDocuments } from '../src/services/search';
import { Document } from '../src/models/document';

describe('Search Functionality', () => {
    let documents: Document[];

    beforeAll(() => {
        documents = [
            { id: 1, title: 'STARINN KYARI JUNGLE RESORT', content: 'A resort located in Village Kyari, Jim Corbett National Park, in the Nainital district of Uttarakhand, India.' },
            { id: 2, title: 'Star Inn Suites and Retreat Ltd', content: 'A company that provides holiday products and experiences through a network of resorts, hotels, and clubs in India and internationally.' },
            { id: 3, title: 'Activities at STARINN KYARI JUNGLE RESORT', content: 'The resort offers indoor and outdoor activities.' },
            { id: 4, title: 'Holiday Packages', content: 'They offer various packages and have tie-ups with numerous resorts globally.' }
        ];
    });

    test('should return relevant documents for a search query', () => {
        const query = 'STARINN KYARI JUNGLE RESORT';
        const results = searchDocuments(documents, query);
        expect(results).toHaveLength(2);
        expect(results).toEqual(expect.arrayContaining([
            expect.objectContaining({ title: 'STARINN KYARI JUNGLE RESORT' }),
            expect.objectContaining({ title: 'Activities at STARINN KYARI JUNGLE RESORT' })
        ]));
    });

    test('should return an empty array for a non-matching query', () => {
        const query = 'Non-existent Resort';
        const results = searchDocuments(documents, query);
        expect(results).toHaveLength(0);
    });

    test('should return relevant documents for a partial match', () => {
        const query = 'holiday';
        const results = searchDocuments(documents, query);
        expect(results).toHaveLength(2);
        expect(results).toEqual(expect.arrayContaining([
            expect.objectContaining({ title: 'Star Inn Suites and Retreat Ltd' }),
            expect.objectContaining({ title: 'Holiday Packages' })
        ]));
    });
});