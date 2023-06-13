import React from 'react';

import { Unauthenticated } from './Unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ username, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        {authState !== AuthState.Unknown && <h1>Welcome to Quincinnati!</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated username={username} onLogout={() => onAuthChange(username, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
          username={username}
            onLogin={(loginUserName, gameID) => {
              onAuthChange(loginUserName, AuthState.Authenticated, gameID);
            }}
          />
        )}
      </div>
    </main>
  );
}
