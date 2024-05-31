import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = ({ cart, showMenu, deleteItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };
  useEffect(() => {
    const total = cart.reduce(
      (accum, item) => accum + parseFloat(item.price) * quantity,
      0
    );
    setTotal(total);
  }, [cart, quantity]);
  return (
    <>
      {cart.length === 0 ? (
        <>
          <div className="empty-page d-flex flex-column justify-content-center align-items-center">
            <h1 className="empty-header">Cart Is Empty</h1>
            <i class="fa-regular fa-face-frown sad-icon"></i>
          </div>
        </>
      ) : (
        <div className="container table-responsive">
          <table className="table table-responsive-sm text-center">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Category</th>
                <th>quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody className="table-group-divider table-body">
              {cart.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>
                        <img className="cart-item-img" src={item.image} alt="not display" />
                        <span
                          className="m-5"
                          onClick={() => {
                            return deleteItem(index);
                          }}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </span>
                      </td>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>
                        <div className="quantity-control">
                          <button
                            className="quantity-btn decrease"
                            aria-label="Decrease quantity"
                            onClick={handleDecrease}
                          >
                            -
                          </button>
                          {/* <input
                    type="text"
                    className="quantity-display"
                    value={quantity}
                    onChange={handleChange}
                    aria-live="polite"
                    aria-label="Current quantity"
                  /> */}
                          <p className="quantity-display">{quantity}</p>
                          <button
                            className="quantity-btn increase"
                            aria-label="Increase quantity"
                            onClick={handleIncrease}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>{quantity * parseFloat(item.price)}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
            <tfoot className="tfooter">
              <tr>
                <td colspan="4">Total</td>
                <td>{total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}

      <div onClick={() => showMenu()}>
        <div className="text-center mt-5">
          <h3 className="btn btn-outline-dark">return to menu</h3>
        </div>
      </div>
    </>
  );
};

export default Cart;
