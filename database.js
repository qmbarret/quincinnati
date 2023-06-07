const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('quincinnati');
const gameCollection = db.collection('gameData');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  //console.log("ping ok!")
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});


async function addGameData(gameData) {
    const result = await gameCollection.insertOne(gameData);
    return result;
  }
  
  function getLeaderboard() {
    const query = { population: { $gt: 0} };
    const options = {
      sort: { score: -1 },
      limit: 5,
    };
    const cursor = gameCollection.find(query, options);
    return cursor.toArray();
  }

  function getGameData(checkID) {
    const query = { gameID: {checkID} };
    return gameCollection.find(query);
  }
  
  module.exports = { addGameData, getLeaderboard, getGameData };
  