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
- **Text** - Each form has a textual description for its input. TODO
- **Images** - TODO
- **Login** - Input boxes for username and password with a button for logging in and registering.
- **Database** - When someone joins a match, it will load their previous data if they were in the match before. Leaving will save their city data before leaving.
- **WebSocket** - The leaderboard will show realtime city populations and who has the biggest cities.

## CSS Deliverable

## JavaScript Deliverable

## Service Deliverable

## DB Deliverable

## Login Deliverable

## WebSocket Deliverable

## React Deliverable