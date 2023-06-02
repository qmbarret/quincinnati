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