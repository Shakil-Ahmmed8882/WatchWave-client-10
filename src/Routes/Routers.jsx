import {
      createBrowserRouter
    } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import AddBrands from "../InsertData/AddBrands";
import Series from '../Pages/Series'
import AddProducts from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Projects from "../Pages/Projects";
import Private from "../🔒Private/Private";
import Login from "../Pages/Forms/Login";
import Page404 from "../Pages/404";
const router = createBrowserRouter([
      {
            path:'/',
            element:<Root></Root>,
            children:[
                  {
                        path:'/',
                        element:<Home></Home>
                  },
                  {
                        path:'/addBrands',
                        element:<AddBrands></AddBrands>
                  },
                  {
                        path:'/series',
                        element:<Series></Series>
                  },
                  {
                        path:'/addProducts',
                        element:<Private><AddProducts></AddProducts></Private>
                  },
                  {
                        path:'/cart',
                        element:<MyCart></MyCart>
                  },
                  {
                        path:'/brand/:id',
                        loader:({params})=> fetch(`http://localhost:1000/brand/${params.id}`),
                        element:<Projects></Projects>
                  },
                  {
                        path:'/login',
                        element:<Login></Login>
                  },



                  // 404 page
                  {
                        path:'*',
                        element:<Page404></Page404>
                  }

            ]
      }
])

export default router