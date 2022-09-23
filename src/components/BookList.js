import React, { Component, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import AddBook from './AddBook';
import { v4 as uuid } from 'uuid';

// class BookList extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <ul className="book-list" style={{ background: theme.ui, color: theme.syntax }}>
//                 <li style={{ background: theme.ui }}>Unlucky</li>
//                 <li style={{ background: theme.ui }}>Broken Hearted</li>
//                 <li style={{ background: theme.ui }}>Stupid Dream</li>
//             </ul>
//         );
//     }
// }

// export default BookList;

function BookList() {

    const [books, setBooks] = useState([
        { title: 'Unlucky', id: 1 },
        { title: 'Broken Hearted', id: 2 },
        { title: 'Stupid Dream', id: 3 },
        { title: 'Goma', id: 4, },
    ])

    const addBook = (title) => {
        setBooks([
            ...books,
            {title, id: uuid()}
        ]);
    }

    return (
        <ThemeContext.Consumer>{(themeContext) => {
            const { isLightTheme, light, dark } = themeContext;
            const theme = isLightTheme ? light : dark;
            return (
                <>
                    <ul className="book-list" style={{ background: theme.ui, color: theme.syntax }}>
                        {books.map(book => {                           
                            return(
                                <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
                            );
                        })}
                        {/* <li style={{ background: theme.ui }}>Unlucky</li>
                        <li style={{ background: theme.ui }}>Broken Hearted</li>
                        <li style={{ background: theme.ui }}>Stupid Dream</li> */}
                    </ul>
                    {/* <button onClick={addBook}>Add</button> */}
                    <AddBook addBook={addBook} />
                </>
            );
        }}</ThemeContext.Consumer>

    );
}

export default BookList;