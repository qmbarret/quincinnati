function login() {
    const nameEl = document.querySelector("#username");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "findMatch.html";
}  

function register() {
    //temporary until Database stuff added
    login();
}