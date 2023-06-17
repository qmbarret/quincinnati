import { useEffect } from 'react';

export function useGameLogic(allGameData, setValues) {
  function checkPopulation(allGameData) {
    if (allGameData.gameStats.population != allGameData.gameStats.popCap && allGameData.gameStats.foodTotal > 0) {
        if (allGameData.gameStats.foodTotal > allGameData.gameStats.popCap - allGameData.gameStats.population) {
            allGameData.gameStats.foodTotal -= allGameData.gameStats.popCap - allGameData.gameStats.population;
            allGameData.gameStats.population = allGameData.gameStats.popCap;
        } else {
            allGameData.gameStats.population = allGameData.gameStats.population + allGameData.gameStats.foodTotal;
            allGameData.gameStats.foodTotal = 0;
        }
    }
}

function updateUserNumbers(gameData) {
  const {houseCounter, factoryCounter, storeCounter, farmCounter, population, foodTotal, moneyTotal, powerTotal, popCap} = gameData.gameStats;
  setValues.setPop(population);
  setValues.setMoney(moneyTotal);
  setValues.setFood(foodTotal);
  setValues.setPow(powerTotal);
  setValues.setHouse(houseCounter);
  setValues.setFactory(factoryCounter);
  setValues.setStore(storeCounter);
  setValues.setFarm(farmCounter);
  setValues.setCap(popCap);
}

  useEffect(() => {
    function startClock() {
        updateLeaderboard();
        updateProgressBar();
        setInterval(updateStats, 1500);
    }


    function updateStats() {
        console.log('Ran clock for 1 sec!');
        allGameData.gameStats.moneyTotal += allGameData.gameStats.storeCounter * Math.ceil(Math.pow(allGameData.gameStats.population, .1));
    
        checkPopulation(allGameData);
    
        updateUserNumbers(allGameData);
        updateProgressBar();
        updateLeaderboard();
    
        saveStats(allGameData);
    }

function getPlayerName() {
    let temp = localStorage.getItem('username');
    if (temp === null || temp == "") {
        return "Mystery Player";
    }
    return temp;
}

function getGameID() {
    let temp = localStorage.getItem('gameID');
    if (temp === null || temp == "") {
        return 'Public match';
    }
    return temp;
}

    function updateProgressBar() {
    
}

function createBoardItem(boardData) {
    const item = document.createElement("li");
    item.innerText = `${boardData.username} - Population ${boardData.gameStats.population}`;
    return item;
}

async function loadSave() {
    try {
        const gameInfo = {
            gameID: getGameID(),
            username: getPlayerName()
        };
        const response = await fetch('/api/load-progress', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(gameInfo),
      });
      if (response.ok) { // Check if the response was successful
        const data = await response.json(); // Parse the response data
        allGameData.gameStats = data.gameStats; // Assign the data to allGameData
      } else {
        throw new Error('Error loading game progress'); // Throw an error if the response is not successful
      }
    } catch (error) {
      console.log("Load save issue:", error); // Include the error parameter to access the error object
    } finally {
        updateUserNumbers(allGameData);
        updateProgressBar();
        updateLeaderboard();
    }
  }

    async function updateLeaderboard() {
        let leaderboard = [];
        try {
            const response = await fetch('/api/leaderboard');
            leaderboard = await response.json();
    
            const leaderboardList = document.querySelector('#leaderboard ol');
            leaderboardList.innerHTML = '';
    
            for (const entry of leaderboard) {
              const boardItem = createBoardItem(entry);
              leaderboardList.appendChild(boardItem);
            }
    
            localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
          } catch {
            console.log("Leaderboard issue");
          }
    }


    async function saveStats(allGameData) {
        try {
            const response = await fetch('/api/game-progress', {
              method: 'POST',
              headers: {'content-type': 'application/json'},
              body: JSON.stringify(allGameData),
            });
      
            const newGameData = await response.json();
    
            localStorage.setItem('gameData', JSON.stringify(newGameData));
        } catch {
            console.log("Game progress issue");
          }
    }

    loadSave();
    startClock();
  }, []);

  return { checkPopulation, updateUserNumbers };
}
