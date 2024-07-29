import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartProductTypes } from '../types';
import { updatedCartItems } from '../lib/utils';

type CartState = {
  cartItems: CartProductTypes[];
};

type CartActions = {
  itemExist: (id: number) => CartProductTypes | undefined;
  addItemToCart: (item: CartProductTypes) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeItemFromCart: (productId: number) => void;
  getProductQuantity: (productId: number) => number;
  totalAmount: () => number;
  clearCart: () => void;
};

const cartInitialState: CartState = {
  cartItems: [],
};

const useCartStore = create(
  persist<CartState & CartActions>(
    (set, get) => ({
      ...cartInitialState,

      itemExist: (id) => get().cartItems.find((cartItem) => cartItem.id === id),

      addItemToCart: (item) => {
        const itemExist = get().itemExist(item.id);

        if (itemExist) {
          itemExist.quantity++;
        } else {
          set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
        }
      },

      increaseQuantity: (productId) => {
        const itemExist = get().itemExist(productId);

        if (itemExist) {
          itemExist.quantity++;
          set({ cartItems: updatedCartItems(get().cartItems, itemExist) });
        }
      },

      decreaseQuantity: (productId) => {
        const itemExist = get().itemExist(productId);

        if (itemExist && itemExist.quantity > 0) {
          itemExist.quantity--;
          if (itemExist.quantity === 0) {
            const updatedCartItems = get().cartItems.filter((item) => item.id !== productId);
            set({ cartItems: updatedCartItems });
          } else {
            set({ cartItems: updatedCartItems(get().cartItems, itemExist) });
          }
        }
      },

      removeItemFromCart: (productId) => {
        const itemExist = get().itemExist(productId);

        if (itemExist) {
          const updatedCartItems = get().cartItems.filter((item) => item.id !== productId);
          set({ cartItems: updatedCartItems });
        }
      },

      getProductQuantity: (productId) => {
        const itemExist = get().itemExist(productId);

        if (itemExist) {
          return itemExist.quantity;
        }

        return 1;
      },

      totalAmount: () => {
        const total = get().cartItems.reduce((acc, cur) => {
          acc += cur.price * cur.quantity;
          return acc;
        }, 0);

        return total;
      },

      clearCart: () => {
        set(cartInitialState);
      },
    }),
    { name: 'cart-items' },
  ),
);

export default useCartStore;
