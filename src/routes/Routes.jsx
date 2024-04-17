import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import PrivateRoutes from "./PrivateRoutes";


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
               element: <PrivateRoutes><PropertyDetails></PropertyDetails></PrivateRoutes>,
            },
           
            {
                path: '/login',
                element:<Login></Login>,
              
            },
            {
                path: '/register',
                element:<Register></Register>,
              
            },
        ]
    }
])

export default router;