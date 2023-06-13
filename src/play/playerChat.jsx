import React from 'react';

export function PlayerChat() {
  const sendMessage = () => {
    // TODO
  };

  return (
    <section id="playerChat">
      <div className="wrap-collapsible">
        <input id="collapsible" className="toggle" type="checkbox" />
        <label htmlFor="collapsible" className="lbl-toggle">Player Chat</label>
        <div className="collapsible-content">
          <div id="chat-text" className="content-inner">
            <input type="text" id="chatInput" />
            <button onClick={sendMessage}>&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
};