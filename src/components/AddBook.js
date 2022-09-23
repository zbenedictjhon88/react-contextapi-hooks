import React, { useState } from 'react';

function AddBook({addBook}) {

    const [book, setBook] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(book);
        addBook(book)
        setBook('');
    }

    const onChangleHandler = (e) => {      
        setBook(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Book Name: </label>
            <input type="text" value={book} onChange={onChangleHandler} />
            <input type="submit" value="Add" />
        </form>
    );
}

export default AddBook;