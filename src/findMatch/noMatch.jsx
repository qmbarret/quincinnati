import React from 'react';

import Button from 'react-bootstrap/Button';
import {MessageDialog} from './messageDialog';

export function NoMatch(props) {
  const [gameID, setGameID] = React.useState(props.gameID);
  const [displayError, setDisplayError] = React.useState(null);

  
async function startMatch() {
  startOrJoin(`/api/game/start`);
}

async function joinMatch() {
  startOrJoin(`/api/game/join`);
}

async function startOrJoin(endpoint) {
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ gameID: gameID }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    localStorage.setItem('gameID', gameID);
    props.onMatchChange(gameID);
    
  } else {
    const body = await response.json();
    setDisplayError(`⚠ Error: ${body.msg}`);
  }
}   

  return (
    <>
      <div>
        <div className='input-group mb-3'>
          <span className='input-group-text'>GameID</span>
          <input
            className='form-control'
            type='text'
            value={gameID}
            onChange={(e) => setGameID(e.target.value)}
            placeholder='Type gameID'
          />
        </div>
        
        <Button variant='primary' onClick={() => startMatch()}>
          Start
        </Button>
        <Button variant='secondary' onClick={() => joinMatch()}>
          Join
        </Button>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
