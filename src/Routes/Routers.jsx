import {
      createBrowserRouter
    } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import AddBrands from "../InsertData/AddBrands";
import Series from '../Pages/Series'
import AddProducts from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
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
                        element:<AddProducts></AddProducts>
                  },
                  {
                        path:'/cart',
                        element:<MyCart></MyCart>
                  }
            ]
      }
])

export default router