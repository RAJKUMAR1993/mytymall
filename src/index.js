import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

//domine:  dev-iqqxdwxod05iogju.us.auth0.com
// id : gDb6FagH4k50dyux0CJ7ytxLdzbiHTYR

root.render(
  <Auth0Provider
    domain="dev-iqqxdwxod05iogju.us.auth0.com"
    clientId="gDb6FagH4k50dyux0CJ7ytxLdzbiHTYR"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
