# Quincinnati City Builder

## Description Deliverable

### Elevator Pitch

Dunno, it's gonna be cool though

### Design

Below are some rough designs of each of the pages that make up the game, being the Login page, the page for joining a match, and inside a match.

![Login Interface](https://user-images.githubusercontent.com/112978030/236575294-4440147a-7f2a-46c0-aa1e-0d23cd36bf4d.jpg)
**Login Interface:** The Login interface has a spot for the username and the password. If a username without a registered account tries to login, a message will appear asking the individual to register. If they try to register a username that is already in the database, a message will appear informing the user that the username is already in use.

![Interface for starting a match or joining one](https://user-images.githubusercontent.com/112978030/236575383-4e5ff432-40e7-43e5-84a0-10ff4e3c9699.jpg)
**Join Match Interface:** This interface will let a user create a match with a unique "game ID" or join a match with the "game ID" of a friend. If no game ID is given, they will just join a public match that anyone can join. I might add a spot to send messages between users, to send game ID's or to coordinate a game.

![Interface for playing the game](https://user-images.githubusercontent.com/112978030/236575432-a20662c2-b820-4d85-9107-9b699dbe2ac4.jpg)
**Game Interface:** This is where the user actually plays the game. Basic layout includes the game ID in the top left corner, the leaderboard of the top 5 biggest cities based off population in the top right corner, and a shop interface along the bottom, displaying the current number of each building built, as well as total money, population, and possibly other resources.

Here is a where some sort of design picture would go.

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
