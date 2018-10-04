import React from 'react';

function Book(props) {
    const { book, changeShelf } = props;
    // console.log(book.imageLinks.thumbnail);
    // console.log(book.authors)
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''}")`
                    }}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(event) => changeShelf(book, event)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.join(', ')}</div>
            </div>
        </li>
    )
}

export default Book