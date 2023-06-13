import React from 'react';

export function Leaderboard() {
    const [leaderboard, setLeaderboard] = React.useState([""]);

    React.useEffect(() => {
        const fetchLeaderboard = async () => {
          try {
            const response = await fetch('/api/leaderboard');
            if (response.ok) {
              const data = await response.json();
              setLeaderboard(data);
            } else {
              throw new Error('Failed to fetch leaderboard');
            }
          } catch (error) {
            console.log('Error:', error.message);
            // Handle the error, e.g., set a default leaderboard or show an error message
          }
        };
    
        fetchLeaderboard();
        
    }, []);    
    
    return (
        <section id="leaderboard">
          <p className="myHeader">
            <img width="20px" src="images/trophySmall.png" alt="trophy" />
            --Leaderboard--
            <img width="20px" src="images/trophySmall.png" alt="trophy" />
          </p>
          <ol>
            {leaderboard.map((item, index) => (
              <li key={index}>
                {item.username} - Population {item.gameStats?.population || 'N/A'}
              </li>
            ))}
          </ol>
        </section>
      );      
};