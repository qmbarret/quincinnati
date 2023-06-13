import React from 'react';

export function Leaderboard({ leaderboardItems }) {
  return (
    <section id="leaderboard">
        <p className="myHeader"><img width="20px" src="images/trophySmall.png" alt="trophy">
        </img>--Leaderboard--<img width="20px" src="images/trophySmall.png" alt="trophy"></img>
    </p>
        <ol>
            {leaderboardItems.map((item, index) => (
            <li key={index}>{item.username} - Population {item.population}</li>
            ))}
      </ol>
    </section>
  );
};