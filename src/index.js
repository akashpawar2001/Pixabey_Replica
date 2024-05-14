import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AllImages from "./pages/AllImages";
import Individual from "./pages/Individual";
import Search from "./pages/Search";
import { ContactUs } from "./components";
import NavSearch from "./components/navSearch/NavSearch";
import Support from "./components/support/Support";
import GoogleAuth from "./Auth/GoogleAuth";
import UserProfile from "./pages/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <GoogleAuth />,
      },
      {
        path: "/images/:id",
        element: <AllImages />,
      },
      {
        path: "/photos/:id",
        element: <Individual />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/lookup",
        element: <NavSearch />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
