import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Books from '../steph/HomePageComponents/BooksSection/Books';
import Authors from '../steph/HomePageComponents/AuthorsSection/Authors';

function SearchTry() {
    const {query} = useParams();

    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [search, setSearch] = useState(query || "");
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
        
        if(query){
            setShowResults(true);
        }
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
    }, [query]);

    const handleBtnSearch = () => {
        setShowResults(true);
    };

    const handleClear = () => {
        setSearch('');
        setShowResults(false); 
    };

    return (
        <>  
            <div className='container p-4 w-1/2'>
            <div className='relative flex items-center w-full h-10 rounded-xl focus-within:shadow-lg bg-white border overflow-hidden'>
              <div className='grid place-items-center h-full w-11 text-gray-300'>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <input
                className='h-full w-full outline-none text-sm border-none text-gray-700'
                type='text'
                id='search'
                onChange={e => setSearch(e.target.value)}
                value={search}
                placeholder='Search Books, Categories and Authors.'
              />
                <button className="text-white focus:outline-none font-medium rounded-xl text-sm px-4" onClick={handleBtnSearch}>Search</button>
                <button className="text-white focus:outline-none font-medium rounded-xl text-sm px-4" onClick={handleClear}>Clear</button>
            </div>
            </div>

            {showResults && (
                <div className='flex justify-center'>
                    {books
                        .filter(book => 
                            book.booktitle.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((book, index) => (
                            
                                <Books 
                                    key={book._id}
                                    id={book._id} 
                                    name={book.booktitle} 
                                    img={book.bookcover}
                                    description={book.bookdesc} 
                                    author={book.author}
                                />
                            
                    ))}

                    {authors
                        .filter(author => 
                            author.name.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((author, index) => (
                            <Authors
                                id={author._id}
                                name={author.name}
                                img={author.picture}
                                description={author.bio}
                                link={author.link}
                                key={author._id}
                            />
                    ))}

                    {books
                        .filter(book => 
                            book.category.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((book, index) => (
                            <Books 
                                    key={book._id}
                                    id={book._id} 
                                    name={book.booktitle} 
                                    img={book.bookcover}
                                    description={book.bookdesc} 
                                    author={book.author}
                                />
                    ))}
                </div>
            )}
        </>
    );
}

export default SearchTry;
