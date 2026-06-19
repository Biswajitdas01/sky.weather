import { useProducts } from "../hooks/useProducts";
import { categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Products.css";

export default function Products() {
  const { products, filter, setFilter, search, setSearch, sort, setSort } = useProducts();

  return (
    <div className="products-page container">
      <div className="products-hero">
        <p className="section-label">Handcrafted in Bangladesh</p>
        <h1>The Collection</h1>
        <p>Every piece tells a story. Every purchase sustains a heritage.</p>
      </div>

      <div className="products-toolbar">
        <div className="search-wrap">
          <input
            type="text"
            placeholder="Search by name or artisan…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="sort-select"
        >
          <option value="default">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div className="category-filters">
        {categories.map((c) => (
          <button
            key={c}
            className={`filter-btn ${filter === c ? "active" : ""}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {products.length === 0 ? (
        <div className="empty-state">
          <span>🔍</span>
          <p>No products match your search.</p>
          <button className="btn-outline" onClick={() => { setSearch(""); setFilter("All"); }}>
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <p className="result-count">{products.length} product{products.length !== 1 ? "s" : ""} found</p>
          <div className="products-grid-full">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
