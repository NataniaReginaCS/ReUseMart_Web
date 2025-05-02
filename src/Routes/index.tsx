import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "../Layout/MainLayout";

import Home from "../Pages/Home"
import Shop from "../Pages/Shop";
import Item from "../Pages/Item";
import About from "../Pages/About";
import Profile from "../Pages/profile_pembeli/profile";
import EditProfile from "../Pages/profile_pembeli/edit_profile";
import Login from "../Pages/auth/login";
import RegisterPembeli from "../Pages/auth/register_pembeli"
import RegisterOrganisasi from "../Pages/auth/register_organisasi";

const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Routes Not Found</div>
    },
    {
        path:"/login",
        element: <Login />
    },
    {
        path:"/registerPembeli",
        element: <RegisterPembeli />
    },
    {
        path:"/registerOrganisasi",
        element: <RegisterOrganisasi />
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
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/edit_profile",
                element: <EditProfile/>
            },
            
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
