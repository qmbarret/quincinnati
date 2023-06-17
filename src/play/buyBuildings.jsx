import React from 'react';
import { useGameLogic } from './gameLogic.js';


export function BuyBuildings({allGameData, setValues}) {
  const {checkPopulation, updateUserNumbers} = useGameLogic(allGameData, setValues);

  function houseClick() {
    const houseCost = Math.floor(10 * Math.pow(1.1, allGameData.gameStats.houseCounter));
    if (allGameData.gameStats.moneyTotal >= houseCost && allGameData.gameStats.powerTotal > 0) {
      const updatedGameData = {
        ...allGameData,
        gameStats: {
          ...allGameData.gameStats,
          houseCounter: allGameData.gameStats.houseCounter + 1,
          powerTotal: allGameData.gameStats.powerTotal - 1,
          moneyTotal: allGameData.gameStats.moneyTotal - houseCost,
          popCap: allGameData.gameStats.popCap += Math.floor(50 * Math.pow(1.01, Math.ceil((allGameData.gameStats.houseCounter / 10))))
        },
      };
        checkPopulation(updatedGameData);
        
        updateUserNumbers(updatedGameData);

    };
    const nextCost = Math.floor(10 * Math.pow(1.1, allGameData.gameStats.houseCounter));
    document.getElementById("houseCost").innerHTML = nextCost;
    
}

function storeClick() {
  const storeCost = Math.floor(15 * Math.pow(1.1, allGameData.gameStats.storeCounter));
  if (allGameData.gameStats.moneyTotal >= storeCost && allGameData.gameStats.powerTotal > 0) {
    const updatedGameData = {
      ...allGameData,
      gameStats: {
        ...allGameData.gameStats,
      storeCounter: allGameData.gameStats.storeCounter += 1,
      powerTotal: allGameData.gameStats.powerTotal -= 1,
      moneyTotal: allGameData.gameStats.moneyTotal = allGameData.gameStats.moneyTotal - storeCost
      } }
      
      updateUserNumbers(updatedGameData);

  };
  const nextCost = Math.floor(15 * Math.pow(1.1, allGameData.gameStats.storeCounter));
  document.getElementById("storeCost").innerHTML = nextCost;
}

function factoryClick() {
  const factoryCost = Math.floor(100 * Math.pow(1.8, allGameData.gameStats.factoryCounter));
  if (allGameData.gameStats.moneyTotal >= factoryCost) {
    const updatedGameData = {
      ...allGameData,
      gameStats: {
        ...allGameData.gameStats,
      factoryCounter: allGameData.gameStats.factoryCounter += 1,
      powerTotal: allGameData.gameStats.powerTotal += 40,
      moneyTotal: allGameData.gameStats.moneyTotal = allGameData.gameStats.moneyTotal - factoryCost
      } }
      
      updateUserNumbers(updatedGameData);

  };
  const nextCost = Math.floor(100 * Math.pow(1.8, allGameData.gameStats.factoryCounter));
  document.getElementById("factoryCost").innerHTML = nextCost;
}

function farmClick() {
  const farmCost = Math.floor(20 * Math.pow(1.1, allGameData.gameStats.farmCounter));
  if (allGameData.gameStats.moneyTotal >= farmCost && allGameData.gameStats.powerTotal > 0) {
    const updatedGameData = {
      ...allGameData,
      gameStats: {
        ...allGameData.gameStats,
      farmCounter: allGameData.gameStats.farmCounter += 1,
      powerTotal: allGameData.gameStats.powerTotal -= 1,
      foodTotal: allGameData.gameStats.foodTotal += Math.ceil(50 * Math.pow(1.001, allGameData.gameStats.population)),
      moneyTotal: allGameData.gameStats.moneyTotal = allGameData.gameStats.moneyTotal - farmCost
      }}

      checkPopulation(updatedGameData);
      updateUserNumbers(updatedGameData);
  };
  const nextCost = Math.floor(20 * Math.pow(1.1, allGameData.gameStats.farmCounter));
  document.getElementById("farmCost").innerHTML = nextCost;
}

return (
  <>
    <section id="buyBuilding">
      <p>Buy Buildings:</p>
      <button onClick={houseClick}>
        Buy House $<span id="houseCost">10</span>
      </button>
      <img src="images/blueHouse.png" alt="house" width="50"></img>
      <button onClick={storeClick}>
        Buy Store $<span id="storeCost">15</span>
      </button>
      <img src="images/store.png" alt="store" width="50"></img>
      <button onClick={factoryClick}>
        Buy Factory $<span id="factoryCost">100</span>
      </button>
      <img src="images/factory.png" alt="factory" width="50"></img>
      <button onClick={farmClick}>
        Buy Farm $<span id="farmCost">20</span>
      </button>
      <img src="images/farm.png" alt="farm" width="50"></img>
    </section>
  </>
);
}