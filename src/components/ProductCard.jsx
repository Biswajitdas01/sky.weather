import { useCart } from "../context/CartContext";
import { useWishlist } from "../hooks/useProducts";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggle, isWished } = useWishlist();
  const wished = isWished(product.id);

  return (
    <div className="product-card">
      <div className="card-image">
        <div className="card-emoji">{product.image}</div>
        <button
          className={`wish-btn ${wished ? "active" : ""}`}
          onClick={() => toggle(product.id)}
          aria-label="Add to wishlist"
        >
          {wished ? "♥" : "♡"}
        </button>
        {product.tag && <span className="card-tag">{product.tag}</span>}
      </div>

      <div className="card-body">
        <p className="card-artisan">{product.artisan}</p>
        <h3 className="card-name">{product.name}</h3>
        <p className="card-category">{product.category}</p>

        <div className="card-colors">
          {product.colors.map((c) => (
            <span key={c} className="color-dot" style={{ background: c }} />
          ))}
        </div>

        <div className="card-footer">
          <div>
            <p className="card-price">৳ {product.price.toLocaleString()}</p>
            <p className="card-rating">
              {"★".repeat(Math.floor(product.rating))}
              <span> {product.rating} ({product.reviews})</span>
            </p>
          </div>
          <button className="btn-primary card-cta" onClick={() => addToCart(product)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
