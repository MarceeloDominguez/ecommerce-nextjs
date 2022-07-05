import { createContext, useContext, useEffect, useReducer } from "react";
import { TYPES } from "../actions/types";
import { products } from "../data/Products";
import { shoppingCartReducer } from "../reducers/shoppingCartReducer";

const AppContext = createContext({});

export const shoppingInitialState = {
  products,
  cart: [],
};

export const AppGlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(
    shoppingCartReducer,
    shoppingInitialState
  );

  console.log(state);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("basket"))) {
      dispatch({
        type: TYPES.LOCAL_STORAGE,
        payload: JSON.parse(localStorage.getItem("basket")),
      });
    }
  }, []);

  useEffect(() => {
    if (state !== shoppingInitialState) {
      localStorage.setItem("basket", JSON.stringify(state));
    }
  }, [state]);

  const cartItemNumber = state.cart.reduce((ack, item) => {
    return ack + item.quantity;
  }, 0);

  const priceTotal = state.cart.reduce((ack, item) => {
    return ack + item.quantity * item.price;
  }, 0);

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addToCart,
        deleteFromCart,
        cartItemNumber,
        priceTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
