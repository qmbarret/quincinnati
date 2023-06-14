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
    <div className="play">
      <GameGrid />
      <WelcomeBanner username={props.username} gameID={props.gameID} />
      <ProgressBanner currentLeader={currentLeader} />
      <Leaderboard />
      <PlayerChat />
        <div className='temp'>CityStats</div> 
    </div>
  );
}