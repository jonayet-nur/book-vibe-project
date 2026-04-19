import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router'
// import Mainlayout from './layout/Mainlayout'
// import Homepage from './Pages/Homepage/Homepage'
// import Bookpage from './Pages/Bookpage/Bookpage'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router'
import BookProviderContext from './context/BookProviderContext'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProviderContext>
<RouterProvider router={router}></RouterProvider>
<ToastContainer></ToastContainer>
    </BookProviderContext>
  
  </StrictMode>,
)
