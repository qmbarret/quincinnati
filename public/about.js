window.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    const gameID = localStorage.getItem('gameID');
  
    if (username && gameID) {
      setDisplay('block', 'block');
    } else if (username) {
      setDisplay('block', 'none');
    } else {
      setDisplay('none', 'none');
    }
  });
  
  function setDisplay(displayJoin, displayPlay) {
    const joinEl = document.querySelector(`#joinMatch`);
    const playEl = document.querySelector(`#playMatch`);
  
    if (joinEl) {
      joinEl.style.display = displayJoin;
    }
    if (playEl) {
      playEl.style.display = displayPlay;
    }
  }
  

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