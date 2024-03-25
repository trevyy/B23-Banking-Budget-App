import React, { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../pages/Dashboard/Dashboard";
import Transaction from "../pages/Transaction/Transaction";
import Transfer from "../pages/Transfer/Transfer";
import Account from "../pages/Account/Account";
import Expenses from "../pages/Expenses/Expenses";
import Login from "../pages/Login/Login";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const PrivateRoute = ({ path, element }) => { // can declare outside -- use prop (isLoggedIn)
        return isLoggedIn ? element : <Navigate to="/login" />;
    }

    const router = createBrowserRouter([
        {
        path: "/",
        element: <Outlet />, // dont declare sidebar too many times
        children: [
        {
            path: "/dashboard",
            element: <PrivateRoute 
                        path="/dashboard" 
                        element={<> <Sidebar /> <Dashboard /> </>} 
                     />,
        },
        {
            path: "/transaction",
            element: <PrivateRoute 
                        path="/transaction" 
                        element={<> <Sidebar /> <Transaction /> </>}
                     />,
        },
        {
            path: "/transfer",
            element: <PrivateRoute 
                        path="/transfer" 
                        element={<> <Sidebar /> <Transfer /> </>} 
                     />,
        },
        {
            path: "/account",
            element: <PrivateRoute 
                        path="/account" 
                        element={<> <Sidebar /> <Account /> </>} 
                     />,
        },
        {
            path: "/expenses",
            element: <PrivateRoute 
                        path="/expenses" 
                        element={<> <Sidebar /> <Expenses /> </>} 
                     />,
        },
        {
            path: "/login",
            element: <Login onLogin={handleLogin} />,
        },
        ],},
    ]);

    return <RouterProvider router={router} />;
};

export default AppRouter;
