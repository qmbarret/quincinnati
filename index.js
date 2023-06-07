const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(cookieParser());
app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

let currUser = "";
// Placeholder for register
apiRouter.post('/auth/register', async (req, res) => {
    if (req.body.userName === currUser) {
        res.status(409).send({ msg: 'Current user' });
    } else {
        currUser = req.body.userName;
        res.send(currUser);
    }
});
// Placeholder for login
apiRouter.post('/auth/login', async (req, res) => {
    if (req.body.userName === currUser) {
        res.status(409).send({ msg: 'Current user' });
    } else {
        currUser = req.body.userName;
        res.send(currUser);
    }
});

// get Leaderboard
apiRouter.get('/leaderboard', async (_req, res) => {
    const leaderboard = await DB.getLeaderboard();
    res.send(leaderboard);
});

// Endpoint to save game progress
apiRouter.post('/game-progress', (req, res) => {
    const gameData = DB.addGameData(req.body);
    res.send(gameData);
  });
  
// Endpoint to load game progress
apiRouter.get('/game-progress', (req, res) => {
    res.send(gameData);
});

app.use(function (err, req, res, next) {
    res.status(500).send({type: err.name, message: err.message});
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

let leaderboard = [];

function updateGameData(gameData, leaderboard) {
  const boardStats = {
    userName: gameData.userName,
    population: gameData.gameStats.population,
  };

  if (leaderboard.length === 0) {
    leaderboard.push(boardStats);
  } else {
    let found = false;
    for (let i = 0; i < leaderboard.length; i++) {
      if (leaderboard[i].userName === boardStats.userName) {
        leaderboard[i].population = boardStats.population;
        found = true;
        break;
      }
    }

    if (!found) {
      leaderboard.push(boardStats);
    }
  }

  leaderboard.sort((a, b) => b.population - a.population);
  if (leaderboard.length > 5) {
    leaderboard.length = 5;
  }

  return leaderboard;
}

