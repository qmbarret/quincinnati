# Quincinnati City Builder

## Description Deliverable

### Elevator Pitch

Dunno, it's gonna be cool though

### Design

Below are some rough designs of each of the pages that make up the game, being the Login page, the page for joining a match, and inside a match.

![Login interface](https://user-images.githubusercontent.com/112978030/236573216-c4673f90-59c3-4e19-b6f5-3b78cca9c06b.jpg)
**Login interface:** The Login interface has a spot for the username and the password. If a username without a registered account tries to login, a message will appear asking the individual to register. If they try to register a username that is already in the database, a message will appear informing the user that the username is already in use.

![Interface for starting a match or joining one](https://user-images.githubusercontent.com/112978030/236573247-dcc9890c-ef1e-409a-8bef-048127ac274c.jpg)
**Join Match Interface:** This interface will let a user create a match with a unique "game ID" or join a match with the "game ID" of a friend. If no game ID is given, they will just join a public match that anyone can join. I might add a spot to send messages between users, to send game ID's or to coordinate a game.

![Interface for inside the game](https://user-images.githubusercontent.com/112978030/236573259-09f59d55-d116-42d9-88ce-fcd2ff2eee91.jpg)
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
