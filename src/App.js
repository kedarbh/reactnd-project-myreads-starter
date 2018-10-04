import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Switch, Route } from 'react-router-dom';
import Search from './Components/Search/Search'
import Listbooks from './Components/Listbooks/Listbooks';
import NotFound from './Components/NotFound/NotFound';

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
    let shelf = event.target.value;
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
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
        <Switch>
          <Route exact path="/"
            render={() => (<Listbooks
              changeShelf={this.changeShelf}
              books={this.state.books}
            />
            )} />
          <Route path="/search"
            render={() => (<Search
              books={this.state.books}
              changeShelf={this.changeShelf} />)}
          />
          <Route component={NotFound} />
        </Switch>

      </div >
    )
  }
}

export default BooksApp
