import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "../Layout/MainLayout";

import Home from "../Pages/Home"
import Shop from "../Pages/Shop";
import Item from "../Pages/Item";
import About from "../Pages/About";
import Cart from "../Pages/Cart";

const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Routes Not Found</div>
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/item",
                element: <Item />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
]);


const AppRouter = () => {
    return (
        <>
            <Toaster position="top-center" richColors />
            <RouterProvider router={router} />
        </>
    );
};

export default AppRouter;
