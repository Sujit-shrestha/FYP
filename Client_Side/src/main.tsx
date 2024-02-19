import React from "react";
import "./Packages/UI/Styles/globals.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Packages/UI/Styles/globals.css";

// import Landing from "./Packages/UI/Pages/Landing";
import ErrorPage from "./Packages/UI/Pages/error";
import Signup from "./Packages/UI/Pages/signup";
import Dashboard from "./Packages/UI/Pages/dashboard";
import Login from "./Packages/UI/Pages/login";
import { ThemeProvider } from "./components/theme-provider";

//routing configuration
const router = createBrowserRouter([
  { path: "/", element: <Dashboard />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
