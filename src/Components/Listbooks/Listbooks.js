import React from 'react'
import Bookshelf from '../Bookshelf/Bookshelf'
import { Link } from 'react-router-dom';

class Listbooks extends React.Component {


    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf books = {this.props.books.filter(book => (
                                book.shelf === "wantToRead"
                            ))}
                            bookShelfTitle = "Want To Read"
                            changeShelf = {this.props.changeShelf}
                        />
                        <Bookshelf books = {this.props.books.filter(book => (
                                book.shelf === "currentlyReading"
                            ))}
                            bookShelfTitle = "Currently Reading"
                            changeShelf = {this.props.changeShelf}
                        />
                        <Bookshelf books = {this.props.books.filter(book => (
                                book.shelf === "read"
                            ))}
                            bookShelfTitle = "Read"
                            changeShelf = {this.props.changeShelf}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Listbooks