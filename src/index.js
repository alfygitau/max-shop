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
import ShoesContextProvider from "./contexts/ShoesContext/ShoesContext";
import PhonesContextProvider from "./contexts/Phones/PhonesContext";
import StoresContextProvider from "./contexts/Stores/StoresContext";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-n7qjfx3r.us.auth0.com"
const clientId = "wZHDG5zVUS5BV63FykpwvN51efFc8YJ3"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsListContextProvider>
      <ShoesContextProvider>
        <PhonesContextProvider>
          <StoresContextProvider>
            <CategoriesContextProvider>
              <CartContextProvider>
                <BrowserRouter>
                  <Auth0Provider
                    domain={domain}
                    clientId={clientId}
                    redirectUri={window.location.origin}
                  >
                    <Routes>
                      <Route path="/*" element={<App />} />
                    </Routes>
                  </Auth0Provider>
                </BrowserRouter>
              </CartContextProvider>
            </CategoriesContextProvider>
          </StoresContextProvider>
        </PhonesContextProvider>
      </ShoesContextProvider>
    </ProductsListContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
