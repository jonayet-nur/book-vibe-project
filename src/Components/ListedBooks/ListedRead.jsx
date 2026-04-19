import React, { useContext } from 'react'
import { BookContext } from '../../context/BookProviderContext'
import BookCard from '../../ui/BookCard'

const ListedRead = () => {
    const{readList}=useContext(BookContext)
    //   console.log(readList,wishList)
    if(readList.length ===0 ){
        return <div className='h-[50vh] flex items-center justify-center bg-amber-50 rounded-2xl'>
            <h2 className='font-bold text-3xl '>No Read List Data found</h2>
        </div>
    }
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-6'>
          {
            readList.map((book,ind) =><BookCard key={ind} book={book}></BookCard>)
        }
      </div>
    </div>
  )
}

export default ListedRead