import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoriesContextProvider from "./contexts/CategoriesContext/CategoriesContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "rsuite/dist/rsuite.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductsListContextProvider from "./contexts/ProductsListContext/ProductsListContext";
import CartContextProvider from "./contexts/CartContext/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsListContextProvider>
      <CategoriesContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </CategoriesContextProvider>
    </ProductsListContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
