import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Bookpage from "../Pages/Bookpage/Bookpage";
import Homepage from "../Pages/Homepage/Homepage";
import Error from "../Pages/Error";
import BookDetails from "../Pages/BookDetails/BookDetails";

 export const router =createBrowserRouter([
  {
    path:"/",
    element:<Mainlayout></Mainlayout>,
    children:[
      {index:true,Component:Homepage},

      {path:"/book", Component:Bookpage},
      {path:"/bookdetails/:id",Component:BookDetails,
        loader:()=> fetch('/booksData.json')
      }
    ],
    errorElement:<Error></Error>
    
  }
  
])