import React from 'react';

export function BuyBuildings() {
    return (
    <>
        <section id="buyBuilding">
            <p>Buy Buildings:</p>
            <button onclick="houseClick()">
              Buy House $<span id="houseCost">10</span>
            </button>
            <img src="images/blueHouse.png" alt="house" width="50"></img>
            <button onclick="storeClick(1)">
              Buy Store $<span id="storeCost">15</span>
            </button>
            <img src="images/store.png" alt="store" width="50"></img>
            <button onclick="factoryClick(1)">
              Buy Factory $<span id="factoryCost">100</span>
            </button>
            <img src="images/factory.png" alt="factory" width="50"></img>
            <button onclick="farmClick(1)">
              Buy Farm $<span id="farmCost">20</span>
            </button>
            <img src="images/farm.png" alt="farm" width="50"></img>
          </section>
    </>
)}