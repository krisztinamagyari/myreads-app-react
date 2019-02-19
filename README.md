# MyReads Project

## Overview
The project has been created as part of Udacity's Frontend Web Developer Nanodegree course. I was given a [starter code from Udacity](https://github.com/udacity/reactnd-project-myreads-starter) to create a bookshelf application that allows users to select and categorize books in 3 categories: read, currently reading, want to read. The project's aim was using React to build the application, adding interactivity to the original static template.

##Screenshots

![Main page with the 3 shelves](images/screenshot_shelfpage.png)
![Search page with searching for Drama](images/screenshot_searchpage.png)

## Prerequisites
* [nmp](https://www.npmjs.com/)
* [Node](https://nodejs.org/en/)

## Installing
1. Download the repository on your local computer.
2. Open a terminal and navigate to project folder.
3. Run:
`npm install`
4. Upon finish run:
`npm start`
This opens [localhost:3000](localhost:3000) in your browser window.
5. Start categorizing your books.

## Backend Server
Udacity provided a backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Licences
The content of this repository is free and is licensed under a [MIT License](https://choosealicense.com/licenses/mit/).

## Contributing
This repository is my personal project developed during Udacity's Front-end Web Developer Nanodegree Program. I appreciate any useful tips.
For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
