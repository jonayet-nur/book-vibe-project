import React from 'react'
import { FaBook } from 'react-icons/fa'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import { Link } from 'react-router'

const BookCard = ({book}) => {
  return (
    <Link to={`/bookdetails/${book.bookId}`} className="card bg-base-100  shadow-sm">
  <figure className='mx-4 my-4 bg-purple-200 p-10  rounded-2xl'>
    <img
      src={book.image}
      alt={book.bookName} className="h-85 object-cover rounded-2xl" />
  </figure>
  <div className="card-body font-[Playfair]">
    <div className='flex items-center justify-start gap-10'>
         {book.tags.map(tag => (<div className="badge badge-accent text-white font-black">{tag}</div>))}
    </div>
    <h2 className="card-title  text-3xl font-bold text-gray-700">
      {book.bookName}
    </h2>
    <p className='text-xl font-semibold text-gray-500'>{book.author}</p>
     <div className="divider divider-accent"></div>
      
    <div className="card-actions justify-between ">
      <div className="text-xl font-bold">{book.category}</div>
      <div className="badge badge-outline badge-warning bg-amber-50 font-bold text-[18px]"><IoIosStar></IoIosStar> {book.rating} <IoIosStarOutline className=' text-gray-400'></IoIosStarOutline></div>
    </div>
  </div>
</Link>
  )
}

export default BookCard