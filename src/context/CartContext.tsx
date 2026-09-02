import { createContext, type ReactNode, useState } from "react";
import { type ProductProps } from "../pages/home";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductProps) => void;
}

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  function addItemCart(newItem: ProductProps) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem != -1) {
      let carList = cart;
      carList[indexItem].amount = carList[indexItem].amount + 1;
      carList[indexItem].total =
        carList[indexItem].amount * carList[indexItem].price;
      setCart(carList);
      return;
    } else {
      let data = {
        ...newItem,
        amount: 1,
        total: newItem.price,
      };
      setCart((products) => [...products, data]);
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, cartAmount: cart.length, addItemCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
