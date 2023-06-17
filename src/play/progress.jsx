import React from 'react';

export function ProgressBanner({ currentLeader }) {
  console.log(currentLeader.gameStats);
  
  return (
    <section id="progressBanner" className="text-center">
      <p className="my-2 myHeader">
        <label htmlFor="gameProgress">Progress: <span id="currentLeader">{currentLeader.username  }</span></label>
      </p>
      <div className="row justify-content-center">
        <div className="col-6">
          <progress id="progressBar" className="w-100" max="10000" value="0"></progress>
        </div>
      </div>
    </section>
  );
};