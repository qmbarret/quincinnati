function displayQuote() {
    fetch('https://api.quotable.io/search/quotes?query=work')
        .then(response => response.json())
        .then(data => {
            const containerEl = document.querySelector('#quote');

            const quoteEl = document.createElement('p');
            quoteEl.classList.add('quote');

            const { results } = data;
            const randomIndex = Math.floor(Math.random() * results.length);
            const quote = results[randomIndex];

            quoteEl.textContent = `${quote.content}   -${quote.author}`;

            containerEl.appendChild(quoteEl);
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

displayQuote();