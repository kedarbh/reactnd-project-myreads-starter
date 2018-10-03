import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import Search from './Components/Search/Search'
import Listbooks from './Components/Listbooks/Listbooks';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }


  changeShelf = (book, event) => {
    console.log(this.state)
    let shelf = event.target.value;
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      console.log(shelf);
      this.updateBooks();
    })
  }

  updateBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/"
              render={() => (<Listbooks
                changeShelf={this.changeShelf}
                books={this.state.books}
              />
        )}/>
        <Route path="/search"
              render={() => (<Search
                books={this.state.books}
                changeShelf={this.changeShelf}/>)}
        />

      </div>
    )
  }
}

export default BooksApp
