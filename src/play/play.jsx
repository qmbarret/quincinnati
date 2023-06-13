import React from 'react';
import { WelcomeBanner } from './welcomeBanner';
import { ProgressBanner } from './progress';
import { Leaderboard } from './leaderboard';
import { GameGrid } from './gameGrid';
import { PlayerChat } from './playerChat';
import { CityStats } from './cityStats';

import './play.css';

export function Play(props) {
  const currentLeader = 'Temporary';
  const leaderboardItems = [
    { username: 'Player1', population: 1000 },
    { username: 'Player2', population: 2000 },
    { username: 'Player3', population: 3000 },
  ];

  return (
    <div className="container">
      <WelcomeBanner playerName={props.username} gameID={props.gameID} />
      <ProgressBanner currentLeader={currentLeader} />
      <div className="row">
        <div className="col-8">
          <GameGrid />
        </div>
        <div className="col-4">
          <Leaderboard leaderboardItems={leaderboardItems} />
          <PlayerChat />
        </div>
      </div>
      <CityStats />
    </div>
  );
}