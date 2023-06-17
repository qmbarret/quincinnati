// CityStats.js
import React from 'react';
import { BuyBuildings } from './buyBuildings'

export function CityStats(props) {
  const [population, setPop] = React.useState(0);
  const [popCap, setCap] = React.useState(0);
  const [moneyTotal, setMoney] = React.useState(1000);
  const [powerTotal, setPow] = React.useState(10);
  const [foodTotal, setFood] = React.useState(100);
  const [houseCounter, setHouse] = React.useState(0);
  const [storeCounter, setStore] = React.useState(0);
  const [factoryCounter, setFactory] = React.useState(0);
  const [farmCounter, setFarm] = React.useState(0);

  const allGameData = {
    gameID: props.gameID,
    username: props.username,
    gameStats: {
        population,
        popCap,
        moneyTotal,
        powerTotal,
        foodTotal,
        houseCounter,
        storeCounter,
        factoryCounter,
        farmCounter
    }
}

const setValues = {
  setPop,
  setCap,
  setMoney,
  setPow,
  setFood,
  setHouse,
  setStore,
  setFactory,
  setFarm
}


  return (
    <section id="cityStats">
          <p>
            Population: <span id="population">{population}</span>/<span id="popCap">{popCap}</span>
             | Money: $<span id="moneyTotal">{moneyTotal}</span>
             | Power: <span id="powerTotal">{powerTotal}</span>
             | Food: <span id="foodTotal">{foodTotal}</span>
             || Houses: <span id="houseCounter">{houseCounter}</span>
             | Stores: <span id="storeCounter">{storeCounter}</span>
             | Factories: <span id="factoryCounter">{factoryCounter}</span>
             | Farms: <span id="farmCounter">{farmCounter}</span>
            </p>
          <BuyBuildings allGameData={allGameData} setValues={setValues}/>
        </section>
  );
};

