import React from 'react';

import { Login } from '../login/login';
import { FindMatch } from '../findMatch/findMatch';

import './signIn.css';

export function SignIn({ username, authState, onAuthChange, gameID, hasMatch, onMatchChange }) {
  return (
    <main className='container-fluid bg-secondary text-center moveContainer'>
      <div id="bottomPage">
        <Login username={username} authState={authState} onAuthChange={onAuthChange} />
      </div>
      <div id="topPage">
        <FindMatch gameID={gameID} hasMatch={hasMatch} onMatchChange={onMatchChange} />
      </div>
    </main>
  );
}

