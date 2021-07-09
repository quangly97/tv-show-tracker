## TV Series Tracker

A web based application used to allow the user to keep a list of their currently watching TV series and track all episodes they have watched.

## Project Status

The project is currently in development. The styling and layout of the webpage still needs to be developed using CSS. I also have future plans to use the Netflix API and connect it to the webpage to open up Netflix webpage/app to the current episode of that TV series.

I also wish to include a page where based on the current list of episodes, it will use the data to generate a list of recommended TV series.

## Project Screenshot

## Installation and Setup Instructions

Clone this repository. You will need `node` and `npm` onto your machine.
You will also need to create a MongoDB atlas account and add your own `.env` file with the credentials to the backend directory.

backend/.env:
```
ATLAS_URI=mongodb+srv://<name>:<password>@cluster0.mppf1.mongodb.net<database name>?retryWrites=true&w=majority
ATLAS_DB=<database name>
PORT=5000
```

Installation:
`npm install`

To Start Server:
`npm start`

To Visit App:
`localhost:3000`

## Reflection

This was a personal project I thought about building because with the pandemic, I have been watching much more TV shows and have been keeping track on my phone's notepad app. 

I wanted to build a web application to allow the user to keep a list of all the TV series they are watching. I wanted the web app to also let me know the current episodes I am on in each TV series, how many episodes I have left of each series and provide me all details about the series and the episodes.

One of the main challenges I ran into was dealing with the asynchronous nature of React hooks and component rendering when updating an object's property. A page would only re-render on state change, and although I had set an object as one of my states, a change in it's property would not re-render the page after every update. This lead me to spend a few days on research of the best methods of React and review when to set states and when not to. I also did some review on how to better manipulate promises returned from functions.

The technologies that were implemented in this project are React, React-Router and a significant amount of VanillaJS, JSX and CSS to handle the front end. I chose to use the `create-react-app` boilerplate to minimize setup time and focus more on the implementation of the web page. I used MongoDB atlas to deploy a fully managed MongoDB to store data on the TV series that are added to the user's list. Lastly, for the back end of the web app I used NodeJS and ExpressJS to create a server and handle the connection between the front end to the database.