const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(cookieParser());
app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Update Leaderboard
apiRouter.post('/leaderboard', (req, res) => {
    leaderboard = updateGameData(req.body, leaderboard);
    //console.log(leaderboard);
    res.send(leaderboard);
});

let gameData = {
    gameID: "",
    userName: "",
    gameStats: {
        houses: 0,
        factories: 0,
        stores: 0,
        farms: 0,
        population: 0,
        food: 100,
        money: 1000,
        power: 10,
        populationCap: 0
    }
};
// Endpoint to save game progress
apiRouter.post('/game-progress', (req, res) => {
    gameData = req.body;
    //console.log(gameData);
    // Save the game data to the database or storage
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

