import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import components
import NavMain from "./components/NavMain/Navbar";
import Home from "./components/layout/Home";
import ProductDetail from "./components/layout/ProductDetail";
import SignIn from "./components/layout/SignIn";
import Cart from "./components/layout/Cart";
import Category from "./components/layout/Category";
import FootNav from "./components/Footer/Footer";

export default function() {
  return (
    <Router>
      <div>
        <NavMain />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" component={ProductDetail} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/cart" component={Cart} />
          <Route path="/category" component={Category} />

        </Switch>
       <FootNav/>
      </div>
    </Router>
  );
}
