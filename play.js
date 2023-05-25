let houses = 0;
let stores = 0;
let factories = 0;
let farms = 0;
let population = 0;
let food = 100;
let money = 1000;
let power = 10;

let populationCap = 0;

function runClock() {
    const playerNameEl = document.querySelector('#playerUsername');
    playerNameEl.textContent = getPlayerName();
    setInterval(updateStats, 1500);
}

function checkPopulation() {
    if (population != populationCap && food > 0) {
        if (food > populationCap - population) {
            food -= populationCap - population;
            population = populationCap;
        } else {
            population = population + food;
            food = 0;
        }
        document.getElementById("populationTotal").innerHTML = population;
        document.getElementById("foodTotal").innerHTML = food;
    }
}

function updateStats() {
    console.log('Ran clock for 1 sec!');
    money += stores * Math.ceil(Math.pow(population, .1));

    checkPopulation();

    document.getElementById("populationTotal").innerHTML = population;
    document.getElementById("moneyTotal").innerHTML = money;
    document.getElementById("foodTotal").innerHTML = food;
    document.getElementById("powerTotal").innerHTML = power;
}

function houseClick() {
    const houseCost = Math.floor(10 * Math.pow(1.1, houses));
    if (money >= houseCost && power > 0) {
        houses += 1;
        power -= 1;
        money = money - houseCost;
        populationCap += Math.floor(50 * Math.pow(1.01, Math.ceil((houses / 10))));
        checkPopulation();
        
        document.getElementById("houseCounter").innerHTML = houses;
        document.getElementById("populationTotal").innerHTML = population;
        document.getElementById("moneyTotal").innerHTML = money;
        document.getElementById("powerTotal").innerHTML = power;
    };
    const nextCost = Math.floor(10 * Math.pow(1.1, houses));
    document.getElementById("houseCost").innerHTML = nextCost;
    
}

function storeClick() {
    const storeCost = Math.floor(15 * Math.pow(1.1, stores));
    if (money >= storeCost && power > 0) {
        stores += 1;
        power -= 1;
        money = money - storeCost;
        
        document.getElementById("storeCounter").innerHTML = stores;
        document.getElementById("moneyTotal").innerHTML = money;
        document.getElementById("powerTotal").innerHTML = power;
    };
    const nextCost = Math.floor(15 * Math.pow(1.1, stores));
    document.getElementById("storeCost").innerHTML = nextCost;
}

function factoryClick() {
    const factoryCost = Math.floor(100 * Math.pow(1.8, factories));
    if (money >= factoryCost) {
        factories += 1;
        power += 40;
        money = money - factoryCost;
        
        document.getElementById("factoryCounter").innerHTML = factories;
        document.getElementById("moneyTotal").innerHTML = money;
        document.getElementById("powerTotal").innerHTML = power;
    };
    const nextCost = Math.floor(100 * Math.pow(1.8, factories));
    document.getElementById("factoryCost").innerHTML = nextCost;
}

function farmClick() {
    const farmCost = Math.floor(20 * Math.pow(1.1, farms));
    if (money >= farmCost && power > 0) {
        farms += 1;
        power -= 1;
        food += Math.ceil(50 * Math.pow(1.001, population));
        money = money - farmCost;

        checkPopulation();
        
        document.getElementById("farmCounter").innerHTML = farms;
        document.getElementById("moneyTotal").innerHTML = money;
        document.getElementById("powerTotal").innerHTML = power;
        document.getElementById("foodTotal").innerHTML = food;
    };
    const nextCost = Math.floor(20 * Math.pow(1.1, farms));
    document.getElementById("farmCost").innerHTML = nextCost;
}

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

