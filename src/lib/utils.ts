import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CartProductTypes } from '../types';

/**
 * Utility function for combining Tailwind CSS and clsx classNames.
 * @param inputs - Class names provided as argument.
 * @returns {string} - Combined class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Helper function to update cart items
 * @param {CartProductTypes[]} cartItems
 * @param {CartProductTypes} updatedItem
 * @returns {CartProductTypes[]}
 */
export const updatedCartItems = (
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
