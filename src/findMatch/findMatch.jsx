import React from 'react';

import { NoMatch } from './noMatch';
import { JoinedMatch } from './joinedMatch';
import { HasMatch } from './hasMatch';


export function FindMatch({ gameID, hasMatch, onMatchChange }) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        {hasMatch !== HasMatch.Unknown && <h1>Welcome to Quincinnati!</h1>}
        {hasMatch === HasMatch.JoinedMatch && (
          <JoinedMatch gameID={gameID} onLeaveMatch={() => onMatchChange(gameID, HasMatch.NoMatch)} />
        )}
        {hasMatch === HasMatch.NoMatch && (
          <NoMatch
          gameID={gameID}
          onMatchChange={(startMatch) => {
              onMatchChange(startMatch, HasMatch.JoinedMatch);
            }}
          />
        )}
      </div>
    </main>
  );
}
