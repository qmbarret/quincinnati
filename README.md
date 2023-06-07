# Quincinnati City Builder

## Description Deliverable

### Elevator Pitch

Quincinnati is a city-building game where you compete against your friends to build the most prosperous city. Design and build your own virtual city with residential, commercial, and industrial zones, and watch it grow and evolve over time. Featuring an intuitive interface and easy-to-learn mechanics, Quincinnati is the perfect game for players of all skill levels. Sign up now and start building the city of your dreams!

### Design

Below are some rough designs of each of the pages that make up the game, being the Login page, the page for joining a match, and inside a match.

![Login Interface](https://user-images.githubusercontent.com/112978030/236575904-d9f37648-e8f1-4113-83e3-25a50cdaefe8.jpg)

**Login Interface:** The Login interface has a spot for the username and the password. If a username without a registered account tries to login, a message will appear asking the individual to register. If they try to register a username that is already in the database, a message will appear informing the user that the username is already in use.

![Interface for starting a match or joining one](https://user-images.githubusercontent.com/112978030/236575942-f9784546-a2af-49ea-beec-f6e17960715a.jpg)

**Join Match Interface:** This interface will let a user create a match with a unique "game ID" or join a match with the "game ID" of a friend. If no game ID is given, they will just join a public match that anyone can join. I might add a spot to send messages between users, to send game ID's or to coordinate a game.

![Interface for playing the game](https://user-images.githubusercontent.com/112978030/236575982-6dc3dcae-6421-4dea-958d-6ec6bd28f87e.jpg)

**Game Interface:** This is where the user actually plays the game. Basic layout includes the game ID in the top left corner, the leaderboard of the top 5 biggest cities based off population in the top right corner, and a shop interface along the bottom, displaying the current number of each building built, as well as total money, population, and possibly other resources.

### Key Features

- Secure login over HTTPS
- Different databases store information based off game code
- Display of and ability to select and create buildings
- Display of leaderboard of top 5 cities by population

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Three HTML pages. One for login, starting the game, and the game.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, displaying available buildings, applying changes, display leaderboard.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving leaderboard
  - retrieving city data (numbers of each building, population, etc.)
- **DB** - Store users, numbers of buildings, and population total.
- **Login** - Register and login users. Credentials securely stored in database. Can't play unless authenticated.
- **WebSocket** - As each user plays the game, the leaderboard will update and broadcast to other users their total population. Also with a game ID they can play with others
- **React** - Application ported to use the React web framework.

## HTML Deliverable
For this deliverable, I added the basic application structure.

Add a progress bar to the play game page? Add more textual context. Add images for the house/store/factory

- **HTML Pages** - Four HTML pages that represent the ability to login, join match, play match, and an about page.
- **Links** - The login page automatically links to the join match page. The join match page automatically links to the play match page.
- **Text** - Each form has a textual description for its input. Included a spot for city/building quotes in the about page.
- **Images** - Inserted some images for each of the buildings so far, other images are uploaded to the images folder to be implemented later.
- **Login** - Input boxes for username and password with a button for logging in and registering.
- **Database** - When someone joins a match, it will load their previous data if they were in the match before. Leaving will save their city data before leaving.
- **WebSocket** - The leaderboard will show realtime city populations and who has the biggest cities.

## CSS Deliverable

For this deliverable I styled the application into its possible final appearance:

- **Header, Footer, and Main content body**
- **Navigation Elements** - I dropped the underlines and changed the color for anchor elements as well as a hamburger menu that appears when on the phone (or in portrait mode)
- **Responsive to Window Resizing** - My app mostly looks good on all window sizes and devices. On the play page, too small makes it really difficult to see anything. But it automatically removes the header and footer at a certain height, and removes certain game elements (leaderboard, welcome banner, etc) if there isn't enough room
- **Application Elements** - Used good contrast and fun blue theme throughout
- **Application Text Content** - Consistent fonts throughout the application
- **Application Images** - Images are used in the background and scale with the window size

## JavaScript Deliverable

For this deliverable I made my application functional to play a simple game and to have a functional leaderboard.

- **login** - When you press enter on the login button it takes you to the findMatch page, and once a gameID is given it moves to the Play page.
- **database** - Displayed the counts for the various resources and building counts. Currently this is being stored to the local storage, but it will be replaced with the database data later.
- **WebSocket** - I used the setInterval function to periodically add information to the Leaderboard and to the Chat. It only adds three to each, but the Leaderboard does function with showing only the top 5 players. This will be replaced with WebSocket messages later and updating the Leaderboard from other live players.
- **application logic** - You can only buy buildings if you have sufficient money for them. The population can't exceed the amount of food provided. Factories don't cost any power, just creates it. Stores produce money over time. The progress bar fills based off the current leader in the leaderboard.

## Service Deliverable

For this deliverable I created an HTTP service to host my frontend and provide backend endpoints.

- **Node.js/Express HTTP service** - Done!
- **Static middleware for frontend** - Done!
- **Calls to third party endpoints** - Added random quotes about work to the About page. Currently only picks from a pool of 20, but I'll try to make it more random later.
- **Backend service endpoints** - Added placeholder endpoints for login and register, currently not being called. Endpoints for updating the leaderboard and for saving the game and loading the game on entering the play page.
- **Frontend calls service endpoints** - I did this using the fetch function for leaderboard and game-progress.

## DB Deliverable

For this deliverable I stored and retrieved data from MongoDB.

- **MongoDB Atlas database created** - Done!
- **Endpoints for data** - My endpoints now process the data and send it to Mongo. It also pulls that data back down upon loading the page, keeping game data persistent between loads.
- **Stores data in MongoDB** - Done!

## Login Deliverable

## WebSocket Deliverable

## React Deliverable
