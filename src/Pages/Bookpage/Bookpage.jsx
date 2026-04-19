import React, { useContext } from 'react'
import { BookContext } from '../../context/BookProviderContext'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedRead from '../../Components/ListedBooks/ListedRead';
import ListedWishlist from '../../Components/ListedBooks/ListedWishlist';

const Bookpage = () => {
  const{storedBooks,wishList}=useContext(BookContext)
  console.log(storedBooks,wishList)
  return (
    <div className='container mx-auto my-12'> 
      <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <ListedRead></ListedRead>
    </TabPanel>
    <TabPanel>
      <ListedWishlist></ListedWishlist>
    </TabPanel>
  </Tabs>
    </div>
  )
}

export default Bookpage