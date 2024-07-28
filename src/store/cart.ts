import { create } from 'zustand';

export type CartProductTypes = {
  id: number;
  name: string;
  thumbnail: string;
  price: number;
  quantity: number;
};

const updatedCartItems = (
  cartItems: CartProductTypes[],
  updatedItem: CartProductTypes,
): CartProductTypes[] => {
  const itemIndex = cartItems.findIndex((item) => item.id === updatedItem.id);

  if (itemIndex > -1) {
    cartItems[itemIndex] = updatedItem;
  } else {
    cartItems.push(updatedItem);
  }

  return [...cartItems];
};

export interface CartState {
  cartItems: CartProductTypes[];
  itemExist: (id: number) => CartProductTypes | undefined;
  addItemToCart: (item: CartProductTypes) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeItemFromCart: (productId: number) => void;
}

const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],

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
}));

export default useCartStore;
