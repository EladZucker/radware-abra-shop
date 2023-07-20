/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { SERVER_URL, ITEMS_ENDPOINT } from "../constants";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const setStoreItems = async () => {
    try {
      const response = await fetch(SERVER_URL + "/" + ITEMS_ENDPOINT);
      const data = await response.json();
      setItems(data);
    } catch (e) {
      console.error(e);
    }
  };

  const addItemToCart = (item) => {
    const storeItem = items.find((element) => element.id === item.id);
    const cartItem = cart.find((element) => element.id === item.id);

    if (storeItem.quantity === 0) return;
    if (cartItem) {
      if (storeItem.quantity === cartItem.quantity) return;

      cartItem.quantity++;
      setCart([...cart]);
    } else {
      const newCartItem = {
        name: item.name,
        id: item.id,
        price: item.price,
        image: item.image,
        quantity: 1,
      };

      setCart([...cart, newCartItem]);
    }
  };

  const removeItemFromCart = (item, forceDelete = false) => {
    const cartItem = cart.find((element) => element.id === item.id);

    if (!cartItem) return;

    cartItem.quantity--;

    if (cartItem.quantity <= 0 || forceDelete) {
      const updatedCart = cart.filter((element) => element.id != item.id);
      setCart(updatedCart);
    } else {
      setCart([...cart]);
    }
  };

  const checkout = () => {
    const newItems = items.map((item) => {
      const cartItem = cart.find((element) => element.id === item.id);
      const newItem = { ...item };
      if (cartItem) {
        newItem.quantity -= cartItem.quantity;
      }

      return newItem;
    });
    setItems(newItems);
    setCart([]);
  };
  useEffect(() => {
    setStoreItems();
  }, []);

  const value = {
    items,
    cart,
    checkout,
    addItemToCart,
    removeItemFromCart,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
