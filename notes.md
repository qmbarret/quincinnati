# Notes!
Here is where I will be taking my notes for CS 260. It is definitely a work in progress and I'll be trying my best to keep it relatively neat and ordered, but we'll see how that goes.

## GitHub
### Basic Git Commands
First command to get started is __clone__:
```
git clone url
```
This clones a repository from GitHub to your local device where the code will be worked on.

Next would be the combination of using __commit__ and __push__:
```
git commit
git push
```
As you can imagine, __commit__ is to "commit" changes that we've made in our code environment. I should always include a comment when you commit, saying what I worked on and what I changed/added. __Push__ is to "push" the changes we've made in our code environment to GitHub.

The other side is to use __pull__:
```
git pull
```
__Pull__ "pulls" any changes that have happened to the repository on a different machine or environment or whatever.

## The Kahoot Review Questions
1. You can use this CSS to load fonts from Google: @import url('https://fonts.googleapis.com/css?family=Quicksand'); --- **TRUE**
2. How will this "hello world" be oriented? **Two lines, with the first line saying World and the second saying Hello**
```
<html>
<head>
  <style>
    div {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
  </style>
</head>
<body>
  <div>
    <p>Hello</p>
    <p>World</p>
  </div>
</body>
</html>
```

3. The CSS property padding: **Puts space around the content of selected elements**
4. Executing the following will output: ```const f = y => ++y; console.log(f(3));``` **4**
5. In HTML what does div do? **Creates a division element**
6. What is the order of the CSS box model (outside, going in)? **Margin, border, padding, content** 
7. What does the following output? ``` let a = ['cow','rat','fish']; let b = a.filter(v => v.match(/A|f/i)); console.log(b); ``` **['rat','fish']**
8. What does the following output? ``` let a = ['cow','rat','fish']; let b = a.reduce((a,v) => [a,v].join(':')); console.log(b); ``` **cow:rat :fish**
9. What does the following output? ``` let a = [1,2,3]; let e = a.map(number => { return 'a' + number) } ); console.log(2); ``` **['a1','a2','a3']**
10. What does ``` document.querySelector('p').addEventListener('mouseover, console.log); ``` do? **Adds a mouseover event listener to a p element**
11. Unordered list tag? **ul**
12. Which of the following is NOT a valid JS function? 
```const f = (x) => {} || function f(x) {} || function f(x) = {} || const f = function(x) {}``` **function f(x) = {}**
13. Which of the following is NOT a valid way to include JS? **script src='file.js' || script 1+1 /script || div onclick='1+1'/ are all okay.**
14. Which of the following is a valid JS object? **{ n:1 } objects use : not = !**
15. What does the DOM textContent propert do? **Sets the child text for an element**
16. Valid hyperlink? **a href="link.com" x /a**
17. Using CSS how woud you turn only the BYU text blue? (two divs, one with a class) **div.header { color:blue; }**
18. Which of the following is valid JSON? **{"x":3}**
19. Which console command makes a script executable? **chmod +x deploy.sh (chmod - change file mode bits, x changes executable)**
20. Which of the following is a DNS subdomain? **cs260.cs.byu.edu**
21. To point to another DNS record, you should use the following DNS record type: **CNAME**
22. <img src="https://github.com/qmbarret/quincinnati/assets/112978030/5cccaf12-b9ba-4955-ba3e-7819ec392402" width="30%" height="30%"> **burger fries taco shake noodles**
23. <img src="https://github.com/qmbarret/quincinnati/assets/112978030/4240c1bf-823e-4dc6-b622-68a11c80cdc7" width="30%" height="30%"> **A D B**

## Promises
JavaScript executes as a single threaded application. You can asynchronously execute code with the use of a JavaScript `Promise`. Because the execution is asynchronous the promise object can be in one of three states at any given point in time.

1. **pending** - Currently running asynchronously
1. **fulfilled** - Completed successfully
1. **rejected** - Failed to complete

```js
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```

### Resolving and rejecting

Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to `fulfilled` when things complete correctly, or to `rejected` when an error happens. The promise executor function takes two functions as parameters, `resolve` and `reject`. Calling `resolve` sets the promise to the `fulfilled` state, and calling `reject` sets the promise to the `rejected` state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```

If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the `pending` state.

```js
console.log(coinToss);
// OUTPUT: Promise {<pending>}
```

If you then wait ten seconds and the log the coinToss promise object again, the state will either show as `fulfilled` or `rejected` depending upon the way the coin landed.

```js
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
```

### Then, catch, finally

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```
```js
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```

### The observer pattern

Promises are the standard way to do asynchronous processing in JavaScript, but they are not the only way. The `Observer` pattern, popularized by web programming frameworks such as `Angular`, use a model called `Observer`. The major difference between Observers and Promises is that Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you then pass an execution object into. This allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution.

## The Kahoot Review Questions Part 2
1. Different reserved ports: **22 SSH, 25 SMTP, 80 HTTP, 443 HTTPS, 20/21 FTP, etc**
2. HTTP Status codes: **100 informational, 200 successful, 300 redirection/caching, 400 client errors, 500 server error**
3. General HTTP headers: **Content-Type, Host, Cookie (NOT LANGUAGE)**
4. Cookies allow: **a server to store data on the client**
5. <img src="https://github.com/qmbarret/quincinnati/assets/112978030/4c764f3d-ba19-4765-a9e2-0ce510ec13c3" width="30%" height="30%"> For the request [GET]/fav/george what is logged? **paul george john**
6. <img src="https://github.com/qmbarret/quincinnati/assets/112978030/216a0cd8-4841-46d3-a26e-daf1e6db262a" width="30%" height="30%"> Which Express middleware will match this fetch request? **app.delete(/fav\/(.*)/, () => {})**
7. <img src="https://github.com/qmbarret/quincinnati/assets/112978030/df3e7eb0-236f-404e-ae90-1b200ba28f39" width="30%" height="30%"> What document matches this MongoDB query? **{name: "Walke", score: -55}**
8. Why is hashing stored passwords important? **It improves security by making the password unreadable**
9. <img src="https://github.com/qmbarret/quincinnati/assets/112978030/c4ac1d70-d1cc-4c17-b079-f418577d48db" width="30%" height="30%"> Given the following code, what will console.log print? **Client:Server:Hello**
10. What value does WebSocket add to HTTP? **It is peer to peer instead of client to server**
11. What are some purposes of JSX? **To inject your HTML into your JavaScript, to componentize your HTML, to allow for composability of your HTML, NOT to combine CSS, HTML, and JS**
12. <img src="https://github.com/qmbarret/quincinnati/assets/112978030/8d43ccdf-aad0-49b4-8eda-549e8486c923" width="30%" height="30%"> What will component A initially display? **tacofish**
13. <img src="https://github.com/qmbarret/quincinnati/assets/112978030/e55eda36-e148-48c6-b284-f51cf3133dce" width="30%" height="30%"> What component will the URL /burger render? **B**
14. What does the command `npm install ws` do? **Locks the version of the websocket package for your application, adds the websocket source code to your node_modules directory, and adds a dependency to your package.json file**
15. You can use fetch in front-end and back-end code. **TRUE**
16. True about Linux daemons: **Executes independent of the user, starts when the computer is rebooted, PM2 is a daemon, can fork other processes**

