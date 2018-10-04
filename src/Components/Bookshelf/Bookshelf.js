import React from 'react';
import Book from '../Book/Book';

function Bookshelf(props) {
    const { bookShelfTitle, books, changeShelf } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map((book) => (
                            <Book book={book} key={book.id} changeShelf={changeShelf} />
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}
export default Bookshelf