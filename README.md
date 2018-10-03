# MyReads Book App Project

This is a react app to keep track of books. The starter template with static CSS and HTML markup for the project was provided. The goal of this project is to start with this template and add interactivity to the app by refactoring the static code in this template.

## Getting Started

To get started developing:

* clone or download this repository to your local machine
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

The provided backend file [`BooksAPI.js`](src/BooksAPI.js) contains the methods that is needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. It is needed to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Dependencies

* create-react-ap
* react
* react-dom
* react-router-dom
* react-scripts
* prop-types
* sort-by

## Contributing

This repository is the repository for my Udacity front end nanodegree project. Therefore, I will not accept any pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
