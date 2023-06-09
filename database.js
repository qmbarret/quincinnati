const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('quincinnati');
const userCollection = db.collection('users');
const gameCollection = db.collection('gameData');
const idCollection = db.collection('gameID');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  //console.log("ping ok!")
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(username) {
  return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(username, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function getGameID(gameID) {
  return idCollection.findOne({ gameID: gameID });
}

async function createMatch(gameID) {
  const gameObject = { gameID }
  await idCollection.insertOne(gameObject);
  return gameObject;
}

async function addGameData(gameData) {
    const query = {
      username: gameData.username,
      gameID: gameData.gameID
    };
  
    const existingGame = await gameCollection.findOne(query);
  
    if (existingGame) {
      // Game already exists, update the information
      const updateResult = await gameCollection.updateOne(query, { $set: gameData });
      return updateResult;
    } else {
      // Game does not exist, add it to the collection
      const insertResult = await gameCollection.insertOne(gameData);
      return insertResult;
    }
}
  

async function getLeaderboard() {
    const query = { 'gameStats.population': { $gte: 0 } };
    const options = {
        sort: { 'gameStats.population': -1 },
        limit: 5,
    };
    const cursor = gameCollection.find(query, options);
    const leaderboard = await cursor.toArray();
    return leaderboard;
}
  

async function getGameData(gameInfo) {
    const query = {
      username: gameInfo.username,
      gameID: gameInfo.gameID
    };
    
    const result = await gameCollection.findOne(query);

    return result;
  }
  
  
  module.exports = { getUser, getUserByToken, createUser, getGameID, createMatch, addGameData, getLeaderboard, getGameData };
  