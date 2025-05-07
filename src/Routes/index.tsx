import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "../Layout/MainLayout";

import Home from "../Pages/Home"
import Shop from "../Pages/Shop";
import Item from "../Pages/Item";
import About from "../Pages/About";
<<<<<<< Updated upstream
=======
import Profile from "../Pages/profile_pembeli/Profile";
import EditProfile from "../Pages/profile_pembeli/Edit_profile";
import Login from "../Pages/auth/Login";
import RegisterPembeli from "../Pages/auth/Register_pembeli"
import RegisterOrganisasi from "../Pages/auth/Register_organisasi";

>>>>>>> Stashed changes
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
