//File: src/App.js
import Home from "./components/Home";
import React, { useEffect } from "react";

import Header from "./components/Header";
import Tentang from "./components/Tentang";
import Kontak from "./components/Kontak";
import Footer from "./components/Footer";
import Produk from "./components/Produk";
import DetailProduk from "./components/DetailProduk";
import "./assets/bootstrap/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    // Use effect to change document title when the component mounts or the route changes
    const changeDocumentTitle = () => {
      const routeName = window.location.pathname;
      let pageTitle = "Default Title"; // Set default title

      // Set different titles based on the route
      if (routeName === "/") {
        pageTitle = "Home Page";
      } else if (routeName === "/tentang") {
        pageTitle = "About Us";
      } else if (routeName === "/kontak") {
        pageTitle = "Contact Us";
      } else if (routeName === "/produk") {
        pageTitle = "Products";
      }

      document.title = pageTitle; // Set the document title
    };

    changeDocumentTitle(); // Set the initial title when the component mounts

    // Add a listener to update the title when the route changes
    window.addEventListener("hashchange", changeDocumentTitle);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("hashchange", changeDocumentTitle);
    };
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/tentang">
            <Tentang />
          </Route>
          <Route exact path="/kontak">
            <Kontak />
          </Route>
          <Route exact path="/produk">
            <Produk />
          </Route>
          <Route exact path="/detail/:id">
            <DetailProduk />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
