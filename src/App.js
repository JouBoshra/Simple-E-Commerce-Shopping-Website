import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import Checkout from "./components/Checkout";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <h1>E-commerce Shopping App</h1>
            <hr />
            <Routes>
              <Route
                path="/"
                element={
                  <div className="row">
                    <div className="col-md-8">
                      <Filter />
                      <hr />
                      <Products />
                    </div>
                    <div className="col-md-4">
                      <Basket />
                    </div>
                  </div>
                }
              />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
