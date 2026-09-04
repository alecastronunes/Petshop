import { createContext, type ReactNode, useState } from "react";
import { type ProductProps } from "../pages/home";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductProps) => void;
  removeItemCart: (product: CartProps) => void;
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

    if (indexItem !== -1) {
      setCart((currentCart) =>
        currentCart.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          }

          const newAmount = item.amount + 1;

          return {
            ...item,
            amount: newAmount,
            total: newAmount * item.price,
          };
        }),
      );

      //   let carList = cart;
      //   carList[indexItem].amount = carList[indexItem].amount + 1;
      //   carList[indexItem].total =
      //     carList[indexItem].amount * carList[indexItem].price;
      //   setCart(carList);
    } else {
      let data = {
        ...newItem,
        amount: 1,
        total: newItem.price,
      };
      setCart((products) => [...products, data]);
    }
  }

  function removeItemCart(product: CartProps) {
    const indexItem = cart.findIndex((item) => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      const currentCart = cart.map((item) => {
        if (item.id !== product.id) {
          return item;
        }

        const newAmount = item.amount - 1;

        return {
          ...item,
          amount: newAmount,
          total: item.total - item.price,
        };
      });

      setCart(currentCart);
      return;
    }

    const itemToRemove = cart.filter((item) => item.id !== product.id);
    setCart(itemToRemove);
  }

  return (
    <CartContext.Provider
      value={{ cart, cartAmount: cart.length, addItemCart, removeItemCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
