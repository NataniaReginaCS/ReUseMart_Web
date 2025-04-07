import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "../Layout/MainLayout";

import Home from "../Pages/Home"


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
