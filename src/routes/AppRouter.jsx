import React from "react";
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
import Logout from "../pages/Logout/Logout";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="app-container">
          <Sidebar />
          <div className="page-container">
            <Outlet />
          </div>
        </div>
      ),
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/transaction",
          element: <Transaction />,
        },
        {
            path: "/transfer",
            element: <Transfer />,
        },
        {
            path: "/logout",
            element: <Logout />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
