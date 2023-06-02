function startMatch() {
    const nameEl = document.querySelector("#startGameID");
    localStorage.setItem("gameID", nameEl.value);
    window.location.href = "play.html";
}  

function joinMatch() {
    const nameEl = document.querySelector("#joinGameID");
    localStorage.setItem("gameID", nameEl.value);
    window.location.href = "play.html";
}

function getPlayerName() {
    let temp = localStorage.getItem('userName');
    if (temp === null || temp == "") {
        return "Mystery Player";
    }
    return temp;
}

const playerNameEl = document.querySelector('#playerUsername');
playerNameEl.textContent = getPlayerName();