function displayQuote() {
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes/business')
        .then(response => response.json())
        .then(data => {
            const quote = data.data[0].quoteText;
            const author = data.data[0].quoteAuthor;
            
            const containerEl = document.querySelector('#quote');
            const quoteEl = document.createElement('p');
            const authorEl = document.createElement('p');
            quoteEl.textContent = data.content;
            authorEl.textContent = data.author;
            containerEl.appendChild(quoteEl);
            containerEl.appendChild(authorEl);
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

displayQuote();