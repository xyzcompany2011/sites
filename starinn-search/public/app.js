// This file contains the JavaScript code for the front-end, handling user interactions and making API calls.

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            const results = await searchDocuments(query);
            displayResults(results);
        }
    });

    async function searchDocuments(query) {
        try {
            const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching search results:', error);
            return [];
        }
    }

    function displayResults(results) {
        resultsContainer.innerHTML = '';
        if (results.length === 0) {
            resultsContainer.innerHTML = '<p>No results found.</p>';
            return;
        }
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <h3>${result.title}</h3>
                <p>${result.snippet}</p>
                <a href="${result.url}" target="_blank">Read more</a>
            `;
            resultsContainer.appendChild(resultItem);
        });
    }
});