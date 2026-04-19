import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const BookContext = createContext()
const BookProviderContext = ({children}) => {
const [readList,setReadList]=useState([])
const [wishList,setWishList]=useState([])

    const handleMarkasRead= (currentBook)=>{
      //step-1: store book id
      //step-2: where to store
      //step-3: book store array of collection
      //step-4:if the book already exist the show a alert or toast
      //step-5 : if not then add the book in the array or collection
      console.log(currentBook,"books")
      const isExistBook = readList.find((book)=> book.bookId === currentBook.bookId);
      if(isExistBook){
        toast.error("the book is already exist ")
      }else{
        setReadList([...readList,currentBook])
        toast.success(`${currentBook.bookName} is  book selected to Read`)
      }
    }


    const handleWishlist= (currentBook)=>{

        const isExistInRead = readList.find( (book)=> book.bookId === currentBook.bookId)

        if(isExistInRead){
            toast.error(" This book is already in read list")
            return;
        }
     
      const isExistBook = wishList.find((book)=> book.bookId === currentBook.bookId);
      if(isExistBook){
        toast.error("the book is already exist ")
      }else{
        setWishList([...wishList,currentBook])
        toast.success(`${currentBook.bookName} is  book selected to wishlist`)
      }
    }

    const data = {
        handleMarkasRead, readList, setReadList,wishList,handleWishlist,setWishList
    }

  return (
   <BookContext.Provider value={data}>
    {children}
   </BookContext.Provider>
  )
}

export default BookProviderContext