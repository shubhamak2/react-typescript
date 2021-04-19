# Centra: recruitment

Create an application displaying GitHub users. Use [GitHub API](https://developer.github.com/v3/) as your data source.

## Views

Here you can find a basic overview of the views in the app and some details on how things should work. Please check the _UI_DESIGN_ pdf attached to the task for more detals regarding the layout of the application.

### Home page

- Display a grid of GitHub users. One _user_ should have:
    - Avatar,
    - GitHub username (example: _@octocat_),
    - Id,
    - Team badge,
    - Link do their profile on GitHub (named _GitHub page_),
    - A button linking to their profile in your app (the _User details page_),
- Show a loading spinner before the users are fetched,
- Implement infinite scroll (fetch more users automatically after scrolling down).


#### Team badge

The team badge is assinged based on following rules:
- If user ID is a multiple of 4 we want to assign a Team A badge,
- If user ID is a multiple of 6 we want to assign a Team B badge,
- If user ID is a multiple of both 4 and 6 we want to assign a Team C badge,
- In every other case there should be no badge assigned.

For now there are only 3 teams, but please take into the account that more may be added in future.

### User details page

- This view should contain information about the chosen user:
  - Avatar,
  - Name,
  - GitHub username,
  - Id,
  - Team badge,
  - Link do their profile on GitHub,
  - How many public repositories they have,
  - List of the repositories,
  - History timeline,
- A _Back_ button, which, when clicked, should redirect the user to the home page.
- Show a loading spinner when loading user data,
- It should work after refreshing the page.

#### History timeline

You can use the following URL to load user's latest events: https://api.github.com/users/{username}/events/public.

For now the history timeline should contain only events of type `PullRequestEvent` (both "opened" and "closed"). The phrase _pull request_ should link to correct pull request on github.

## Optional tasks

- Bonus points for creating tests for one React component and one Redux reducer,
- It would be really nice to see the app running in a real production environment (we suggest heroku or vercel).

# Tips

- Fix typescript errors,
- As a part of the review we will read your commit history (please make sure to include `.git` folder if you decide to send us zip file),
- If you happen to exhaust the limit of available API calls, you can increase it by using a [GitHub personal access token](https://github.com/settings/tokens). For detailed instruction, see the [Rate limiting](https://developer.github.com/v3/#rate-limiting) chapter of GitHub API documentation.

# Technology

This repository already includes React, Redux, CSS modules and TypeScript. You are free to choose whatever auxiliary libraries you like — we recommend `react-router` for routing, `axios` (HTTP requests) and `redux-observable` (async actions).

# Submitting your work

To submit your work you can put the repository on a _private_ GitHub repository and invite the person at Centra you're in contact with as a collaborator, or if you are not using GitHub, zip the entire repository and send it via email.

Don't worry if you need a little assistance — if you have any questions, just shoot us an e-mail. We're happy to help.

# Getting started

```bash
# Install dependencies
npm install

# Start the server in development mode
npm run start

# Build for production
npm run build
```

Before you push to the Git remote, the `prepush` task will lint and type-check your code.
