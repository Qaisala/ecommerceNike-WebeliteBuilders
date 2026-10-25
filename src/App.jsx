import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <main className="overflow-hidden">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
