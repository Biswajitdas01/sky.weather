import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { items, removeFromCart, updateQty, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-empty container">
        <span>🛒</span>
        <h2>Your cart is empty</h2>
        <p>Discover handcrafted pieces made by 4,200+ artisans</p>
        <Link to="/products" className="btn-primary">Browse Collection</Link>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-img">{item.image}</div>
              <div className="cart-item-info">
                <p className="cart-item-artisan">{item.artisan}</p>
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-cat">{item.category}</p>
              </div>
              <div className="cart-item-controls">
                <div className="qty-wrap">
                  <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                </div>
                <p className="cart-item-price">৳ {(item.price * item.qty).toLocaleString()}</p>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-rows">
            <div className="summary-row">
              <span>Subtotal ({items.reduce((s, i) => s + i.qty, 0)} items)</span>
              <span>৳ {total.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="free">Free</span>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>৳ {total.toLocaleString()}</span>
            </div>
          </div>

          <button className="btn-primary checkout-btn">Proceed to Checkout</button>
          <button className="clear-btn" onClick={clearCart}>Clear cart</button>

          <p className="cart-note">🔒 Secure checkout · Free returns · Artisan verified</p>
        </div>
      </div>
    </div>
  );
}
