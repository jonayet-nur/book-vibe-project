import React, { use } from 'react'
import BookCard from '../../ui/BookCard'
const bookPromise = fetch('/booksData.json').then(res =>res.json())
const AllBooks = () => {
    const books = use(bookPromise)
    // console.log(books)
  return (
    
   <div>
    <h2 className='text-5xl text-center font-bold text-[#4f39f6c3] font-[Playfair]'> All Books</h2>
    <p className='text-xl text-center font-semibold text-gray-400'>Discover our handpicked selection of amazing books for every reader</p>
     <div className='my-18 w-10/12 mx-auto  grid grid-cols-1 md:grid-cols-3 gap-10'>
        
        {
            books.map((book,ind) => {
                return <BookCard key={ind} book={book}></BookCard>
            })
        }
    </div>
   </div>
  )
}

export default AllBooks