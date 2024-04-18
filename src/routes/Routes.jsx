import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/properties.json')
              
            },
            {
               path: '/properties/:id',
               element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
            },
           
            {
                path: '/login',
                element:<Login></Login>,
              
            },
            {
                path: '/register',
                element:<Register></Register>,
              
            },
            {
                path: '/errorpage',
                element:<ErrorPage></ErrorPage>,
              
            },
        ]
    }
])

export default router;