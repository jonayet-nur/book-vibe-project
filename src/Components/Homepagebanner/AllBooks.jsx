import React, { use } from 'react'
const bookPromise = fetch('/booksData.json').then(res =>res.json())
const AllBooks = () => {
    const books = use(bookPromise)
    console.log(books)
  return (
    <div className='my-18'>
        <h2 className='text-3xl text-center font-bold'>Books</h2>
        <p>{books.length}</p>
        {
            
        }
    </div>
  )
}

export default AllBooks