import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchTry() {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [search, setSearch] = useState('');
    const [showResults, setShowResults] = useState(false); 

    

    const fetchBooks = () => {
        axios.get("http://localhost:8000/api/getBooks")
            .then((response) => {
                console.log(response.data);
                setBooks(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const fetchAuthors = () => {
        axios.get("http://localhost:8000/api/getAuthors")
            .then((response) => {
                console.log(response.data);
                setAuthors(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (value === "") {
            setShowResults(false);
        }
    };



    useEffect(() => {
        fetchBooks();
        fetchAuthors();
        
        
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                setShowResults(true);
            }
            // else{
            //     setShowResults(false);
            // }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            
        };
    }, []);

    const handleBtnSearch = () => {
        setShowResults(true);
    };

    const handleClear = () => {
        setSearch('');
        setShowResults(false); 
    };

    return (
        <>  
            <div>
                <input 
                    type='text'
                    onChange={handleSearch}
                    value={search}
                    placeholder='Search'
                />
                <button onClick={handleBtnSearch}>Search</button>
                <button onClick={handleClear}>Clear</button>
            </div>

            {showResults && (
                <div>
                    {books
                        .filter(book => 
                            book.booktitle.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((book, index) => (
                            <img key={index} src={book.bookcover} alt="book cover" />
                    ))}

                    {authors
                        .filter(author => 
                            author.name.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((author, index) => (
                            <img key={index} src={author.picture} alt="author" />
                    ))}

                    {books
                        .filter(book => 
                            book.category.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((book, index) => (
                            <img key={index} src={book.bookcover} alt="book cover" />
                    ))}
                </div>
            )}
        </>
    );
}

export default SearchTry;
