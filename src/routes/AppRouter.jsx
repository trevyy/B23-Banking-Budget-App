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
import Login from "../pages/Login/Login";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const router = createBrowserRouter([{
        path: "/",
        element: isLoggedIn ? (
            <div className="app-container">
              <Sidebar />
              <div className="page-container">
                <Outlet />
              </div>
            </div>
        ) : (
            <Login onLogin={handleLogin} />
        ),
            children: [
                {
                    path: "/dashboard",
                    element: isLoggedIn && <Dashboard />,
                },
                {
                    path: "/transaction",
                    element: isLoggedIn && <Transaction />,
                },
                {
                    path: "/transfer",
                    element: isLoggedIn && <Transfer />,
                },
                {
                    path: "/login",
                    element: <Login />,
                },
            ],
        },
    ]);

  return <RouterProvider router={router}>
    <Navigate to="/dashboard" />
  </RouterProvider>;
};

export default AppRouter;
