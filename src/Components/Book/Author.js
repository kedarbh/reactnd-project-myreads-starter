import React from 'react'


function Author(props) {

    const { authors } = props;
    let list = [];
    if (authors) {
        for (let i = 0; i < authors.length; i++) {
            list.push(<div key={i} className="book-authors">{authors[i]}</div>)
        }
    }
    return (
        [list]
    )

}
export default Author