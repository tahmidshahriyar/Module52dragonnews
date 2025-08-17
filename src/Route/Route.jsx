import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import { Children } from "react";
import Home from "../assets/Pages/Home/Home";
import CategoryNews from "../assets/Pages/CategoryNews/CategoryNews";
const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'',
                element: <Home></Home>

            },
             {
                path:'/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () =>fetch('./public/news.json').then(res=>res.json())

            } 
        ]
    },
    {
        path:'/auth',
        element: <h2>Authentication layout</h2>

    },
    {
        path:'/news',
        element: <h3>Mews layout</h3>
    },
    {
        path:'/*',
        element : <h2>Error</h2>
    }

])

export default router ;