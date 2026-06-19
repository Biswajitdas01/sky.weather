import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
        ).filter((i) => i.qty > 0),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (product) => dispatch({ type: "ADD", payload: product });
  const removeFromCart = (id) => dispatch({ type: "REMOVE", payload: id });
  const updateQty = (id, qty) => dispatch({ type: "UPDATE_QTY", payload: { id, qty } });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const total = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = state.items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ items: state.items, addToCart, removeFromCart, updateQty, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
