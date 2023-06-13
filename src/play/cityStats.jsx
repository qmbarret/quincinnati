// CityStats.js
import React from 'react';
import { BuyBuildings } from './buyBuildings'

export function CityStats() {
  return (
    <section id="cityStats">
          <p>
            Population: <span id="populationTotal">0</span>/<span id="popCap">0</span>
             | Money: $<span id="moneyTotal">1000</span>
             | Power: <span id="powerTotal">10</span>
             | Food: <span id="foodTotal">100</span>
             || Houses: <span id="houseCounter">0</span>
             | Stores: <span id="storeCounter">0</span>
             | Factories: <span id="factoryCounter">0</span>
             | Farms: <span id="farmCounter">0</span>
            </p>
          <BuyBuildings />
        </section>
  );
};

