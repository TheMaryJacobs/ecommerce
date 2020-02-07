import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth";
// Import components
import NavMain from "./components/NavMain/Navbar";
import Home from "./layout/Home";
import SignIn from "./layout/SignIn";
import SignUp from "./layout/SignUp";
import admin from "./layout/admin";
import Cart from "./layout/Cart";
import Category from "./layout/Category";
import ProductDetail from "./layout/ProductDetail";
import CheckoutOpt from "./components/CheckoutOpt/CheckoutOpt.js";
import CartProvider from "./state/cartContext";

import { useState } from "react";

export default function() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };
  return (
    <AuthContext.Provider value={false}>
      <CartProvider>
        <Router>
          <div>
            <NavMain />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/product" component={ProductDetail} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/cart" component={Cart} />
              <Route path="/category" component={Category} />
              <Route path="/checkout-opt" component={CheckoutOpt} />
              <PrivateRoute path="/admin" component={admin} />
            </Switch>
          </div>
        </Router>
      </CartProvider>
    </AuthContext.Provider>
  );
}
