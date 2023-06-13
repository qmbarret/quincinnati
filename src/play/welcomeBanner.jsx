import React from 'react';

export function WelcomeBanner({ username, gameID }) {
  return (
    <section id="welcomeBanner">
      <p className="my-1 myHeader">Welcome, <span id="playerUsername">{username}</span>!</p>
      <p>Game ID: <span id="gameID">{gameID}</span></p>
    </section>
  );
};