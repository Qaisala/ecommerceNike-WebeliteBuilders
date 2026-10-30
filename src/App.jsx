import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import SingleProduct from "./components/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* Note: Hero already contains its own Navbar inside its motion section 
            to handle the dynamic background colors when switching shoes! */}
        <Hero />
        <Footer />
      </>
    ),
  },
  {
    path: "/men",
    element: (
      <>
        <Navbar />
        <ProductList category="men" />
        <Footer />
      </>
    ),
  },
  {
    path: "/women",
    element: (
      <>
        <Navbar />
        <ProductList category="women" />
        <Footer />
      </>
    ),
  },
  {
    path: "/kids",
    element: (
      <>
        <Navbar />
        <ProductList category="kids" />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/products/:productId",
    element: (
      <>
        <Navbar />
        <SingleProduct />
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <Cart />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <main className="overflow-hidden">
      {/* <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
      > */}
      <RouterProvider router={router} />
      {/* </UpdateFollower> */}
    </main>
  );
}

export default App;
