# DeveloperSocialNetworkingWebApp

This project is a full-stack developer social networking web application built with the **MERN** stack (MongoDB, Express, React, and Node.js). It is a small social network app that includes authentication, profiles and forum posts.

## Features

- Add, update, and delete developer.
- View a list of all developers.
- RESTful API for backend services.
- Add Post comments for login developer.
- View a list of developer post comments.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **API**: RESTful API
- **CSS**: Custom CSS for simple UI

## Quick Start 🚀

Add a default.json file in config folder with the following

```bash
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

## Install server dependencies

```bash
cd backend
npm install
```
## Run server

```bash
cd backend
npm run server
```
## Install client dependencies

```bash
cd client
npm install
```
## Run client

```bash
cd client
npm start
```
