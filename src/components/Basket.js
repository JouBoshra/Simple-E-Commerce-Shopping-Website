import React from "react";
import utils from "../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import { useNavigate } from "react-router-dom"; // Use useNavigate hook

const Basket = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to checkout page
  };

  return (
    <div className="alert alert-info">
      {cartItems.length === 0 ? (
        "Basket is empty"
      ) : (
        <div>
          You have {cartItems.length} items in the basket. <hr />
          <ul style={{ marginLeft: -25 }}>
            {cartItems.map((item) => (
              <li key={item.id}>
                <b>{item.title}</b>
                <button
                  style={{ float: "right" }}
                  className="btn btn-danger btn-xs"
                  onClick={() => removeFromCart(cartItems, item)}
                >
                  X
                </button>
                <br />
                {item.count} X {utils.formatCurrency(item.price)}
              </li>
            ))}
          </ul>
          <b>
            Sum:{" "}
            {utils.formatCurrency(
              cartItems.reduce((a, c) => a + c.price * c.count, 0)
            )}
          </b>
          <button onClick={handleCheckout} className="btn btn-primary">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, { removeFromCart })(Basket); // Ensure this is at the top level
