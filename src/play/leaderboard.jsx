import React from 'react';

export function Leaderboard({setLeader}) {
    const [leaderboard, setLeaderboard] = React.useState([""]);

    React.useEffect(() => {
        const fetchLeaderboard = async () => {
          try {
            const response = await fetch('/api/leaderboard');
            if (response.ok) {
              const data = await response.json();
              setLeaderboard(data);

              const leader = data.reduce((prev, current) => {
                return (prev.gameStats?.population || 0) > (current.gameStats?.population || 0) ? prev : current;
              }, {});

              setLeader(leader);
            } else {
              throw new Error('Failed to fetch leaderboard');
            }
          } catch (error) {
            console.log('Error:', error.message);
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