import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Toaster } from "sonner";
import MainLayout from "../Layout/MainLayout";

import Home from "../Pages/Home"
import Shop from "../Pages/Shop";
import Item from "../Pages/Item";
import About from "../Pages/About";
import Profile from "../Pages/profile_pembeli/profile";
import EditProfile from "../Pages/profile_pembeli/edit_profile";
import AdminOrganisasi from "../Pages/admin/Organisasi/AdminOrganisasi";


import Login from "../Pages/auth/login";
import RegisterPembeli from "../Pages/auth/register_pembeli"
import RegisterOrganisasi from "../Pages/auth/register_organisasi";
import ForgotPassword from "../Pages/auth/forgotPassword";
import ResetPassword from "../Pages/auth/resetPassword";


import Cart from "../Pages/Cart";
const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Routes Not Found</div>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/registerPembeli",
        element: <RegisterPembeli />
    },
    {
        path: "/registerOrganisasi",
        element: <RegisterOrganisasi />
    },
    {
        path: "/forgotpassword",
        element: <ForgotPassword />
    },
    {
        path: "/reset-password",
        element: <ResetPassword/>
    },
    {
        path: "/admin-organisasi",
        element: <AdminOrganisasi/>
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
                element: <EditProfile />
            }, {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/edit_profile",
                element: <EditProfile />
            },
            {
                path: "/cart",
                element: <Cart />
            },

        ]
    }
]);


const AppRouter = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Toaster position="top-center" richColors />
            <RouterProvider router={router} />
        </>
    );
};

export default AppRouter;
