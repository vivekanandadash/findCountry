import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Homes from "../components/Homes";
import Contact from "../components/Contact";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Error from "../components/Error";
import CountryDetail from "../components/CountryDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement:<Error/>,
        children:[
           
            {
                path: "/",
                element: <Homes/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/:country",
                element: <CountryDetail/>,
            },
        ]
    },
]);
createRoot(document.getElementById("root")).render(<RouterProvider router={router} />
)