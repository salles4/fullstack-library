import React from 'react'
import { data, responsive } from '../data';


const ShowAllBooks = () => {
    return (
        <div className='container'>
            <div className='text-center font-bold text-3xl mt-5 mb-10 '>
                <h1>More Authors</h1>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6 ">
                {data.map((book) => (
                    <div 
                    key={book.id}
                    className= "bg-gray-100 shadow-xl rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:bg-red-950 hover:text-white max-w-[420px]">
                    <img src={book.img} alt={book.name} className="w-full h-auto object-cover " />
                    <div className="p-4">
                        <h3 className="text-lg font-bold">{book.name}</h3>
                        <p className="text-gray-500 mb-2">{book.category}</p>
                        <p className="text-sm text-gray-700">{book.description}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>  
      );
}

export default ShowAllBooks
