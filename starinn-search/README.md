# STARINN KYARI JUNGLE RESORT Search Engine

## Overview
STARINN KYARI JUNGLE RESORT is a resort located in Village Kyari, Jim Corbett National Park, in the Nainital district of Uttarakhand, India. This project implements a search engine that allows users to find information about the resort and its offerings.

## Features
- **Web Crawler**: Collects data from specified URLs to keep the information up-to-date.
- **Document Indexing**: Indexes documents for efficient searching.
- **Search Functionality**: Allows users to search for specific information related to the resort.
- **API Integration**: Provides a RESTful API for front-end interaction.

## Project Structure
```
starinn-search
├── src
│   ├── server.ts          # Entry point of the application
│   ├── indexer.ts         # Logic for indexing documents
│   ├── crawler.ts         # Web crawler implementation
│   ├── api
│   │   ├── routes.ts      # API routes definition
│   │   └── controllers.ts  # API request handlers
│   ├── models
│   │   └── document.ts     # Document model definition
│   ├── services
│   │   └── search.ts       # Search service implementation
│   ├── utils
│   │   └── tokenizer.ts     # Utility functions for tokenization
│   └── config
│       └── index.ts        # Configuration settings
├── public
│   ├── index.html          # Main HTML file for the front-end
│   └── app.js              # Front-end JavaScript code
├── data
│   ├── corpus.json         # Initial documents for indexing
│   └── index.db            # Database for indexed documents
├── tests
│   └── search.test.ts      # Unit tests for search functionality
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
├── .gitignore              # Git ignore file
└── README.md               # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd starinn-search
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Start the server:
   ```
   npm start
   ```
2. Access the application in your web browser at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.