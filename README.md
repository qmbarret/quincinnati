# Quincinnati City Builder

## Description Deliverable

### Elevator Pitch

Dunno, it's gonna be cool though

### Design

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
