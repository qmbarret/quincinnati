import React from 'react';
import { WelcomeBanner } from './welcomeBanner';
import { ProgressBanner } from './progress';
import { Leaderboard } from './leaderboard';
import { GameGrid } from './gameGrid';
import { PlayerChat } from './playerChat';
import { CityStats } from './cityStats';

import './play.css';

export function Play(props) {
  const [currentLeader, setLeader] = React.useState("");

  return (
    <>
    <div className="play">
      <GameGrid />
      <WelcomeBanner username={props.username} gameID={props.gameID} />
      <ProgressBanner currentLeader={currentLeader} />
      <Leaderboard setLeader={setLeader}/>
      <PlayerChat /> 
    </div>
    <CityStats username={props.username} gameID={props.gameID}/>
    </>
  );
}