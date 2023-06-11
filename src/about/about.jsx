import React from 'react';
import './about.css';

export function About() {
  const [quote, setQuote] = React.useState("Loading...");

  React.useEffect(() => {
      fetch('https://api.quotable.io/search/quotes?query=work')
        .then(response => response.json())
        .then(data => {
          const { results } = data;
          const randomIndex = Math.floor(Math.random() * results.length);
          const quote = results[randomIndex];
        
          setQuote(`${quote.content}  -${quote.author}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, []);


  return (
    <main className="text-center py-5">
      <div className="container">
        <h2 className="mb-4">All about Quincinnati</h2>
        <p className="fontSize">Quincinnati is a city-building game where you compete against your friends to build the most prosperous city. Design and build your own virtual city with residential, commercial, and industrial zones, and watch it grow and evolve over time. Featuring an intuitive interface and easy-to-learn mechanics, Quincinnati is the perfect game for players of all skill levels. Sign up now and start building the city of your dreams!</p>
        <div className="fontSize" id="quote">{quote}</div>
        <div id="fontSize">All images were produced by Lyvia Zinn</div>
      </div>
    </main>
  );
}