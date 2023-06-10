window.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username');
  const gameID = localStorage.getItem('gameID');

  if (username && gameID) {
    setDisplay('block', 'block');
  } else if (username) {
    setDisplay('block', 'none');
  } else {
    setDisplay('none', 'none');
  }
});

function setDisplay(displayJoin, displayPlay) {
  const joinEl = document.querySelector(`#joinMatch`);
  const playEl = document.querySelector(`#playMatch`);

  if (joinEl) {
    joinEl.style.display = displayJoin;
  }
  if (playEl) {
    playEl.style.display = displayPlay;
  }
}


function getPlayerName() {
    let temp = localStorage.getItem('username');
    if (temp === null || temp == "") {
        return "Mystery Player";
    }
    return temp;
}

const playerNameEl = document.querySelector('#playerUsername');
playerNameEl.textContent = getPlayerName();

async function startMatch() {
    const gameID = document.querySelector("#startGameID")?.value;
    startOrJoin(`/api/game/start`, gameID);
}
  
async function joinMatch() {
    const gameID = document.querySelector("#joinGameID")?.value;
    startOrJoin(`/api/game/join`, gameID);
}
  
async function startOrJoin(endpoint, gameID) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ gameID: gameID }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  
    if (response.ok) {
      localStorage.setItem('gameID', gameID);
      window.location.href = 'play.html';
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  }