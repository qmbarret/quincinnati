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

  return (
    <div className="container">
      <WelcomeBanner username={props.username} gameID={props.gameID} />
      <ProgressBanner currentLeader={currentLeader} />
      <div className="row">
        <div className="col-8">
        <GameGrid />
        </div>
        <div className="col-4">
          <Leaderboard />
          <PlayerChat />
        </div>
        CityStats 
      </div>
    </div>
  );
}