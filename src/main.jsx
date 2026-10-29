import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MouseFollower } from "react-mouse-follower";
import ShopContextProvider from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContextProvider>
      <MouseFollower />
      <App />
    </ShopContextProvider>
  </StrictMode>,
);

// <MouseFollower/> is a component imported from the react-mouse-follower library. It is used to create a custom, animated cursor effect (such as a smooth trailing circle, dot, or custom shape) that tracks the user's mouse movements across the screen.
