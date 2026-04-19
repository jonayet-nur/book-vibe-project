import React, { useContext } from 'react'
import { FaBaby, FaBook } from 'react-icons/fa'
import { useLoaderData, useParams } from 'react-router'
import { BookContext } from '../../context/BookProviderContext'

const BookDetails = () => {
    const {id} = useParams()
    // console.log(id)
    const books = useLoaderData()
    // console.log(books)
    const expectedBooks = books.find((book)=> book.bookId == id)
    console.log(expectedBooks)
    const{bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}= expectedBooks
  // const contextBook = useContext(BookContext)
  // console.log("bookContext",contextBook)
    //  const bookContext = useContext(BookContext)
    //  console.log("first",bookContext)
    const {handleMarkasRead,handleWishlist}=useContext(BookContext)
  return (
    <div className="card lg:card-side bg-base-50 p-4 shadow-sm my-10 mx-5  grid grid-cols-2 ">
  <figure className='mx-4 my-4 bg-purple-100 p-8  rounded-3xl shadow-2xl h-212 w-137'>
    <img
      src={image}
      alt={bookId} className="h-full  w-full  object-cover  rounded-2xl" />
  </figure>
  <div className=" mt-6  space-y-4">
    <h2 className="text-4xl font-bold font-[Playfair] bg-linear-to-l from-purple-300 via-purple-500 to-purple-700 bg-clip-text text-transparent ">{bookName}</h2>
    <p className='text-xl font-semibold text-[#13131397] flex items-center'>By: {author}</p>
  <p className=' border-y-2 border-gray-300 py-6'><span className='bg-purple-50 p-3 border-blue-200 border rounded-2xl font-semibold text-purple-700'>{category}</span></p>
    <p className='  font-semibold  font-[Work Sans] bg-linear-to-l from-gray-400 via-gray-600 to-gray-600 bg-clip-text text-transparent'> Review: <br/> {review}</p>
      <div className='flex items-center  gap-10'>
        <span className='font-bold text-xl'>Tag</span>
         {tags.map(tag => (<div className="badge badge-accent text-white "> # {tag}</div>))}
    </div>
<div className='border-t-2 border-gray-300 '></div>

    <div className=' bg-purple-50 p-8 space-y-4 '>
      <div className='flex justify-between items-center border-b border-gray-300 py-5'>
        <span>Number of Pages:</span>
         {totalPages}
      </div>
      <div className=' flex justify-between items-center border-b border-gray-300 py-5'>
        <span>Publisher:</span>
        {publisher}
      </div>
      <div className=' flex justify-between items-center border-b border-gray-300 py-5 '>
        <span>Year of Publishing:</span>
         {yearOfPublishing}
      </div>
      <div className='flex justify-between items-center'>
        <span>Rating:</span>
         {rating}
      </div>
    </div>

    <div className='flex gap-4 pt-4'>
      <button onClick={()=> handleMarkasRead(expectedBooks)} className='bg-purple-700 text-white px-12 py-4 rounded-2xl'> Mark as Read</button>
      <button onClick={()=>handleWishlist(expectedBooks)} className=' px-12 py-4  text-purple-600 font-bold rounded-2xl border-2 border-purple-600'> Add to WishList</button>
    </div>

  </div>
</div>
  )
}
 
export default BookDetails