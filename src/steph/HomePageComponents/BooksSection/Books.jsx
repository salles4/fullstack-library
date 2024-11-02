import React from 'react';
import { Link } from 'react-router-dom';

export default function Books(props) {
  return (
    <Link className='text-black' to={`/book/overview/${props.id}`}>
      <div className='shadow-lg rounded-lg bg-gray-50 hover:bg-red-950 group mb-3 hover:scale-105 duration-200'>
        <div key={props.key}>
          <div className='relative h-[300px] overflow-hidden'>
            <img
              src={props.img}
              alt='Book'
              className='rounded-b-2xl mt-3 absolute inset-0 w-full h-full object-contain'
            />
          </div>
          <div className='p-3 text-center overflow-hidden min-h-[150px] text-ellipsis'>
            <p className='text-xl m-2 group-hover:text-white'>{props.name}</p>
            <div className='flex justify-center gap-2 text-center text-gray-600 text-sm group-hover:text-white'>
              <svg
                className='group-hover:fill-white'
                fill="#000000"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="25px"
                viewBox="0 0 64 64"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M32,42c8.271,0,15-8.523,15-19S40.271,4,32,4s-15,8.523-15,19S23.729,42,32,42z M32,8c5.963,0,11,6.869,11,15
                    s-5.037,15-11,15s-11-6.869-11-15S26.037,8,32,8z"/>
                  <path d="M4.103,45.367l-4,12c-0.203,0.61-0.101,1.28,0.275,1.802C0.753,59.691,1.357,60,2,60h60c0.643,0,1.247-0.309,1.622-0.831
                    c0.376-0.521,0.479-1.191,0.275-1.802l-4-12c-0.209-0.626-0.713-1.108-1.348-1.29l-14-4c-0.482-0.139-0.996-0.09-1.444,0.134
                    L32,45.764l-11.105-5.553c-0.448-0.224-0.962-0.272-1.444-0.134l-14,4C4.815,44.259,4.312,44.741,4.103,45.367z M19.802,44.137
                    l11.304,5.652c0.562,0.281,1.227,0.281,1.789,0l11.304-5.652l12.238,3.496L59.226,56H4.774l2.789-8.367L19.802,44.137z"/>
                </g>
              </svg>
              <p className='mt-1 group-hover:text-white'>{props.author}</p>
            </div>
          </div>
      </div>
    </div>
    </Link>
  );
}
