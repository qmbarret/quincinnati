const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(cookieParser());
app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/register', async (req, res) => {
    if (await DB.getUser(req.body.username)) {
        res.status(409).send({ msg: 'Existing user' });
      } else {
        const user = await DB.createUser(req.body.username, req.body.password);
    5
        // Set the cookie
        setAuthCookie(res, user.token);
    
        res.send({
          id: user._id,
        });
      }
});

apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// TODO: logout button
apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
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
apiRouter.post('/load-progress', async (req, res) => {
    res.send(await DB.getGameData(req.body));
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

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }