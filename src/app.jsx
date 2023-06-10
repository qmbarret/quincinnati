import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { FindMatch } from './findMatch/findMatch';
import { About } from './about/about';
import './app.css';

export default function App() {
    return (
        <BrowserRouter>
      <div className='body'>
        <header>
            <h1>Quincinnati</h1>
            <nav>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container'>
                <div className='menu-button'></div>
                </label>
                <menu className="menu">
                <div><NavLink className="text-white nav-link" to="x">Home</NavLink></div>
                <div id="joinMatch"><NavLink className="text-white nav-link" to="findMatch">Find a Match</NavLink></div>
                <div id="playMatch"><NavLink className="text-white nav-link" to="play">Play the Game</NavLink></div>
                <div><NavLink className="text-white nav-link" to="about">About</NavLink></div>
                </menu>
            </nav>
        </header>
    
        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/findMatch' element={<FindMatch />} />
            <Route path='/play' element={<Play />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
            <div className="mx-2">Quinn Barret</div>
            <div><a className="text-white mx-2 nav-link" href="https://github.com/qmbarret/quincinnati" target="_blank" rel="noopener noreferrer">GitHub Repo of Quincinnati</a></div>
        </footer>
      </div>
      </BrowserRouter>
    );
  }

  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }