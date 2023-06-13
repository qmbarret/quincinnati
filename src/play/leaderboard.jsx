import React from 'react';

export async function Leaderboard() {
    const [leaderboard, setLeaderboard] = React.useState([""]);

    try {
        const response = await fetch('/api/leaderboard');
        setLeaderboard(await response.json());

    } catch {
        console.log("Leaderboard issue");
    }

  return (
    <section id="leaderboard">
        <p className="myHeader"><img width="20px" src="images/trophySmall.png" alt="trophy">
        </img>--Leaderboard--<img width="20px" src="images/trophySmall.png" alt="trophy"></img>
    </p>
        <ol>
            {leaderboard.map((item, index) => (
            <li key={index}>{item.username} - Population {item.population}</li>
            ))}
      </ol>
    </section>
  );
};