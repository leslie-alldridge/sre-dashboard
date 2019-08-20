## SRE Dash

## Goals

Test suite - In Progress (Notes Below)

Release and Roster from Go Lang - DONE

An on call roster & releases and help page will assist users - DONE

Login and auth to keep the page secure - DONE

Last refreshed duration on screen - DONE

Additional styling and data from golang server - DONE

Deploy golang server and main app to Heroku - DONE

Dashboard will update with a users newly saved Goals - DONE

Users should be able to set custom SLO goals / objectives. DONE

Indications will appear so we can quickly see which goals aren't being met. DONE (color scheme)

Create a dashboard where users can view SLO metrics. DONE

Clicking on a graph will display the 99% outliers (url, value, count, team) - DONE

### This application uses

- React (with Hashrouter)
- Redux
- Node
- Golang API server
- Knex JS (Postgres on Heroku)
- Nodemailer
- Bcrypt JS
- JSON Web Tokens
- Passport
- Webpack
- Express
- Axios
- My password reset boilerplate (to give me a headstart on auth)
- Material UI

### Desired New Features

Focus on styling and mobile friendly components - (e.g. looking back, tables weren't the best option to update goals)

Learn how to upload my templating engine to Heroku on Go (works locally but local packages were tough through Heroku's Go buildpack). I Managed to achieve this and have both the frontend and backend applications deployed.

### Learning

I created this App over two days. I would have liked to add a lot more features and fine tuned the styling a bit more. Learning how to create a GoLang web server and serve template files was really fun. Writing Go isn't too bad once I understood packages, vendors and how to set up paths on my computer. It was really cool to write an API server in Go and send data through to my main stack being React JS. 

I learned a lot throughout this project and I'm looking forward to the next one.

### Todos

Offline test suite - In Progress

I Wasn't able to achieve 100% test coverage in the timeframe I set, but was able to get a solid amount of testing done.
