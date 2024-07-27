import { create } from 'zustand';

export interface CartProduct {
  id: number;
  name: string;
  thumbnail: string;
  price: number;
  quantity: number;
}

export interface CartState {
  cartItems: CartProduct[];
  itemExist: (id: number) => CartProduct | undefined;
  addItemToCart: (item: CartProduct) => void;
}

const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],

  itemExist: (id) => get().cartItems.find((cartItem) => cartItem.id === id),

  addItemToCart: (item) => {
    const itemExist = get().itemExist(item.id);

    if (itemExist) {
      if (typeof itemExist.quantity === 'number') {
        itemExist.quantity++;
      }

      set({ cartItems: [...get().cartItems] });
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    }
  },
}));

export default useCartStore;
