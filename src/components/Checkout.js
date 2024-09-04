import React, { Component } from "react";
import { connect } from "react-redux";
import utils from "../utils";
import { useNavigate } from "react-router-dom";
import "./checkout.css";
const Checkout = ({ cartItems }) => {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.count, 0);

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div className="checkout-page">
      <h2 className="checkout-header">Checkout</h2>
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-product">
              <span className="checkout-product-name">{item.title}</span>
              <span className="checkout-product-price">
                {item.count} x {utils.formatCurrency(item.price)}
              </span>
            </div>
          ))}
          <div className="checkout-total">
            Total: {utils.formatCurrency(totalPrice)}
          </div>
        </>
      )}
      {/* Add the Return button */}
      <button
        onClick={handleReturn}
        className="btn btn-secondary"
        style={{ marginTop: "20px" }}
      >
        Return to Home
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps)(Checkout);
