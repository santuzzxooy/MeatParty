import { createContext, useReducer, useContext } from "react";

// Estado inicial
const initialState = {
  cart: [],
};

// Reducer para manejar acciones
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id && item.type === action.payload.type
      );
      const updatedItem = {
        ...action.payload,
        price: action.payload.price * 1000, // Convertir a valor numérico completo (30K -> 30000)
        tickets: action.payload.tickets || 1, // Asegurar cantidad de tickets
      };

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id && item.type === action.payload.type
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  tickets: item.tickets, // Mantener el número original de tickets
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...updatedItem, quantity: 1 }],
        };
      }

      case "REMOVE_COMPLETELY":
        return {
          ...state,
          cart: state.cart.filter(
            (item) => !(item.id === action.payload.id && item.type === action.payload.type)
          )
        };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id && item.type === action.payload.type
            ? { ...item, quantity: action.payload.newQuantity }
            : item
        ),
      };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    default:
      return state;
  }
};

// Crear contexto
const CartContext = createContext();

// Proveedor del carrito
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Calcular totales
  const cartTotal = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const ticketsTotal = state.cart.reduce(
    (total, item) => total + (item.tickets * item.quantity),
    0
  );

  const value = {
    cart: state.cart,
    cartTotal,
    ticketsTotal,
    dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};