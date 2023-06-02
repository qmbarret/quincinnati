const allGameData = {
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
}

function startClock() {
    const playerNameEl = document.querySelector('#playerUsername');
    playerNameEl.textContent = getPlayerName();
    allGameData.userName = getPlayerName();
    const gameIDEl = document.querySelector('#gameID');
    gameIDEl.textContent = getGameID();
    allGameData.gameID = getGameID();
    updateLeaderboard();
    updateProgressBar();
    setInterval(updateStats, 1500);
}

function checkPopulation() {
    if (allGameData.gameStats.population != allGameData.gameStats.populationCap && allGameData.gameStats.food > 0) {
        if (allGameData.gameStats.food > allGameData.gameStats.populationCap - allGameData.gameStats.population) {
            allGameData.gameStats.food -= allGameData.gameStats.populationCap - allGameData.gameStats.population;
            allGameData.gameStats.population = allGameData.gameStats.populationCap;
        } else {
            allGameData.gameStats.population = allGameData.gameStats.population + allGameData.gameStats.food;
            allGameData.gameStats.food = 0;
        }
    }
}

function updateStats() {
    console.log('Ran clock for 1 sec!');
    allGameData.gameStats.money += allGameData.gameStats.stores * Math.ceil(Math.pow(allGameData.gameStats.population, .1));

    checkPopulation();
    growCityHall();

    updateUserNumbers();
    updateProgressBar();
    updateLeaderboard();

    saveStats(allGameData);
}

function updateUserNumbers() {
    const {houses, factories, stores, farms, population, food, money, power, populationCap} = allGameData.gameStats;
    document.getElementById("populationTotal").innerHTML = population;
    document.getElementById("moneyTotal").innerHTML = money;
    document.getElementById("foodTotal").innerHTML = food;
    document.getElementById("powerTotal").innerHTML = power;
    document.getElementById("houseCounter").innerHTML = houses;
    document.getElementById("factoryCounter").innerHTML = factories;
    document.getElementById("storeCounter").innerHTML = stores;
    document.getElementById("farmCounter").innerHTML = farms;
    document.getElementById("popCap").innerHTML = populationCap;
}

function houseClick() {
    const houseCost = Math.floor(10 * Math.pow(1.1, allGameData.gameStats.houses));
    if (allGameData.gameStats.money >= houseCost && allGameData.gameStats.power > 0) {
        allGameData.gameStats.houses += 1;
        allGameData.gameStats.power -= 1;
        allGameData.gameStats.money = allGameData.gameStats.money - houseCost;
        allGameData.gameStats.populationCap += Math.floor(50 * Math.pow(1.01, Math.ceil((allGameData.gameStats.houses / 10))));
        checkPopulation();
        
        updateUserNumbers();
    };
    const nextCost = Math.floor(10 * Math.pow(1.1, allGameData.gameStats.houses));
    document.getElementById("houseCost").innerHTML = nextCost;
    
}

function storeClick() {
    const storeCost = Math.floor(15 * Math.pow(1.1, allGameData.gameStats.stores));
    if (allGameData.gameStats.money >= storeCost && allGameData.gameStats.power > 0) {
        allGameData.gameStats.stores += 1;
        allGameData.gameStats.power -= 1;
        allGameData.gameStats.money = allGameData.gameStats.money - storeCost;
        
        updateUserNumbers();
    };
    const nextCost = Math.floor(15 * Math.pow(1.1, allGameData.gameStats.stores));
    document.getElementById("storeCost").innerHTML = nextCost;
}

function factoryClick() {
    const factoryCost = Math.floor(100 * Math.pow(1.8, allGameData.gameStats.factories));
    if (allGameData.gameStats.money >= factoryCost) {
        allGameData.gameStats.factories += 1;
        allGameData.gameStats.power += 40;
        allGameData.gameStats.money = allGameData.gameStats.money - factoryCost;
        
        updateUserNumbers();
    };
    const nextCost = Math.floor(100 * Math.pow(1.8, allGameData.gameStats.factories));
    document.getElementById("factoryCost").innerHTML = nextCost;
}

function farmClick() {
    const farmCost = Math.floor(20 * Math.pow(1.1, allGameData.gameStats.farms));
    if (allGameData.gameStats.money >= farmCost && allGameData.gameStats.power > 0) {
        allGameData.gameStats.farms += 1;
        allGameData.gameStats.power -= 1;
        allGameData.gameStats.food += Math.ceil(50 * Math.pow(1.001, allGameData.gameStats.population));
        allGameData.gameStats.money = allGameData.gameStats.money - farmCost;

        checkPopulation();
        updateUserNumbers();
    };
    const nextCost = Math.floor(20 * Math.pow(1.1, allGameData.gameStats.farms));
    document.getElementById("farmCost").innerHTML = nextCost;
}

function getPlayerName() {
    let temp = localStorage.getItem('userName');
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
    const list = document.querySelector('#leaderboard ol');
    const topPlayer = list.querySelector('li:first-child');
    
    if (topPlayer) {
      const username = topPlayer.innerText.split(' - ')[0];
      const population = parseInt(topPlayer.innerText.split(' - Population ')[1], 10);
      
      document.getElementById("progressBar").value = population;
      document.getElementById("currentLeader").innerText = username;
    }
}
  

function growCityHall() {
    const image = document.getElementById("cityHall");
    image.style.width = ((allGameData.gameStats.population / 10000) * 100 + 107) + "px";
}

function createBoardItem(boardData) {
    const item = document.createElement("li");
    item.innerText = `${boardData.userName} - Population ${boardData.population}`;
    return item;
}

startClock();
loadSave();

const fakeUser1 = {
    gameID: "",
    userName: "CoolGuy",
    gameStats: {
        houses: 10,
        factories: 10,
        stores: 10,
        farms: 10,
        population: 10,
        food: 100,
        money: 1000,
        power: 10,
        populationCap: 10
    }
}

const fakeUser2 = {
    gameID: "",
    userName: "AwesomeSauce",
    gameStats: {
        houses: 10,
        factories: 10,
        stores: 10,
        farms: 10,
        population: 382,
        food: 100,
        money: 1000,
        power: 10,
        populationCap: 400
    }
}

const fakeUser3 = {
    gameID: "",
    userName: "qmbarret",
    gameStats: {
        houses: 10,
        factories: 10,
        stores: 10,
        farms: 10,
        population: 9999,
        food: 100,
        money: 1000,
        power: 10,
        populationCap: 10
    }
}


async function updateLeaderboard(user = allGameData) {
    try {
        const response = await fetch('/api/leaderboard', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(user),
        });
  
        // Store what the service gave us as the high scores
        const leaderboard = await response.json();

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

function addFakeLeadersWithDelay(fakeUser, delay) {
    setTimeout(function() {
        updateLeaderboard(fakeUser);
    }, delay);
}

addFakeLeadersWithDelay(fakeUser1, 4000);
addFakeLeadersWithDelay(fakeUser2, 10000);
addFakeLeadersWithDelay(fakeUser3, 20000);

function insertChatMessages() {
    const chatMessages = [
      "Player A: I'm the best",
      "Player B: ur a noob",
      "Player C: I love this game!"
    ];
  
    const chatContainer = document.querySelector('#playerChat .content-inner');
    const chatInput = document.querySelector('#chatInput');
  
    chatMessages.forEach((message, index) => {
      setTimeout(() => {
        const pElement = document.createElement('p');
        pElement.textContent = message;
        chatContainer.insertBefore(pElement, chatInput);
      }, (index + 1) * 5000); // Delay each insertion by 5 seconds (5000 milliseconds)
    });
}
setTimeout(insertChatMessages, 5000);


async function saveStats(allGameData) {
    try {
        const response = await fetch('/api/game-progress', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(allGameData),
        });
  
        // Store what the service gave us as the high scores
        const newGameData = await response.json();

        localStorage.setItem('gameData', JSON.stringify(newGameData));
    } catch {
        console.log("Game progress issue");
      }
}
async function loadSave() {
    try {
        const response = await fetch('/api/game-progress', {
        method: 'GET',
        headers: {'content-type': 'application/json'},
      });
      if (response.ok && response.userName === allGameData.userName && response.gameID === allGameData.gameID) { // Check if the response was successful
        const data = await response.json(); // Parse the response data
        allGameData.gameStats = data.gameStats; // Assign the data to allGameData
      } else {
        throw new Error('Error loading game progress'); // Throw an error if the response is not successful
      }
    } catch (error) {
      console.log("Load save issue:", error); // Include the error parameter to access the error object
    }
  }
  