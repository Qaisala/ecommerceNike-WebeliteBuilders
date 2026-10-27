import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { UpdateFollower } from "react-mouse-follower";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <Footer />
      </>
    ),
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
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
        <RouterProvider router={router} />
      </UpdateFollower>
    </main>
  );
}

export default App;
