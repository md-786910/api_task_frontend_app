import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./components/root";
import Error from "./components/error";
import React from "react";
import Task from "./pages/task";


const Home = React.lazy(() => import('./pages/Home'));
const AuthPage = React.lazy(() => import('./pages/authPage'));


const router = createBrowserRouter([
    {
        path: "",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/task",
                element: <Task />,
            },
            {
                path: "/target",
                element: <Home />,
            },
        ],
    },
    {
        path: "/login",
        element: <AuthPage />,
    },
]);

function PublicRoutes() {
    return (
        <RouterProvider router={router} />
    );
}

export default PublicRoutes;


