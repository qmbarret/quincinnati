import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import './app.css';

export default function App() {
    return (
      <div className='body'>
        <header>
            <h1>Quincinnati</h1>
            <nav>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container'>
                <div className='menu-button'></div>
                </label>
                <menu className="menu">
                <div><a className="text-white nav-link" href="index.html">Home</a></div>
                <div id="joinMatch"><a className="text-white nav-link" href="findMatch.html">Find a Match</a></div>
                <div id="playMatch"><a className="text-white nav-link" href="play.html">Play the Game</a></div>
                <div><a className="text-white nav-link" href="about.html">About</a></div>
                </menu>
            </nav>
        </header>
  
        <main>App components go here</main>
  
        <footer>
            <div className="mx-2">Quinn Barret</div>
            <div><a className="text-white mx-2 nav-link" href="https://github.com/qmbarret/quincinnati" target="_blank" rel="noopener noreferrer">GitHub Repo of Quincinnati</a></div>
        </footer>
      </div>
    );
  }