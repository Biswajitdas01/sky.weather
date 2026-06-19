import { useState, useEffect, useCallback } from "react";
import { products } from "../data/products";

export function useProducts() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const filtered = products
    .filter((p) => filter === "All" || p.category === filter)
    .filter((p) =>
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.artisan.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return { products: filtered, filter, setFilter, search, setSearch, sort, setSort };
}

export function useScrollPosition() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
}

export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initial;
    } catch {
      return initial;
    }
  });

  const set = useCallback(
    (v) => {
      setValue(v);
      try { localStorage.setItem(key, JSON.stringify(v)); } catch {}
    },
    [key]
  );

  return [value, set];
}

export function useWishlist() {
  const [wishlist, setWishlist] = useLocalStorage("arong-wishlist", []);

  const toggle = useCallback(
    (id) => {
      setWishlist((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    },
    [setWishlist]
  );

  const isWished = (id) => wishlist.includes(id);
  return { wishlist, toggle, isWished };
}
