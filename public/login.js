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
  

async function login() {
    loginOrCreate(`/api/auth/login`);
  }
  
  async function register() {
    loginOrCreate(`/api/auth/register`);
  }
  
  async function loginOrCreate(endpoint) {
    const username = document.querySelector('#username')?.value;
    const password = document.querySelector('#password')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  
    if (response.ok) {
      localStorage.setItem('username', username);
      window.location.href = 'findMatch.html';
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  }