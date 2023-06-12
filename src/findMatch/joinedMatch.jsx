import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';


export function JoinedMatch(props) {
  const navigate = useNavigate();

  function leaveMatch() {
    localStorage.removeItem('gameID');
    props.onLeaveMatch();
  }

  return (
    <div>
      <div className='playerName'>Play in {props.gameID}!</div>
      <Button variant='primary' onClick={() => navigate('/play')}>
        Play
      </Button>
      <Button variant='secondary' onClick={() => leaveMatch()}>
        Leave Match
      </Button>
    </div>
  );
}
