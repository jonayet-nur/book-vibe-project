import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router'
// import Mainlayout from './layout/Mainlayout'
// import Homepage from './Pages/Homepage/Homepage'
// import Bookpage from './Pages/Bookpage/Bookpage'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
