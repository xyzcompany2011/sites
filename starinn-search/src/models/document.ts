// This file defines the Document model, representing the structure of documents stored in the database.

export interface Document {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

// Example of a document object
export const exampleDocument: Document = {
    id: "1",
    title: "STARINN KYARI JUNGLE RESORT",
    content: "STARINN KYARI JUNGLE RESORT is a resort located in Village Kyari, Jim Corbett National Park, in the Nainital district of Uttarakhand, India. It is a unit of Star Inn Suites and Retreat Ltd. The resort offers indoor and outdoor activities. Star Inn Suites and Retreat Ltd is a company that provides holiday products and experiences through a network of resorts, hotels, and clubs in India and internationally. They offer various packages and have tie-ups with numerous resorts globally.",
    createdAt: new Date(),
    updatedAt: new Date(),
};