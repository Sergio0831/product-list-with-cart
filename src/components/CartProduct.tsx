import toast from 'react-hot-toast';
import { cn } from '../lib/utils';
import useCartStore from '../store/cart';
import Button from './Button';
import RemoveItem from './Icons/RemoveItem';
import { CartProductTypes } from '../types';

export interface CartProductProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'id'> {
  product: Omit<CartProductTypes, 'thumbnail'>;
}

const CartProduct = ({ product, className }: CartProductProps) => {
  const { removeItemFromCart } = useCartStore();
  const { id, name, price, quantity } = product;

  const handleItemRemove = (productId: number) => {
    removeItemFromCart(productId);
    toast.success(`${name} removed from cart.`);
  };

  return (
    <div
      className={cn(
        'flex items-center justify-between py-4 border-b-[1px] border-b-rose-100',
        className,
      )}>
      <div>
        <h3 className="text-preset-4-bold text-rose-900 mb-2">{name}</h3>
        <div className="flex gap-x-2 items-center">
          <span className="text-preset-4-bold text-red">{quantity}x</span>
          <span className="text-preset-4 text-rose-500">&#64; &euro;{price.toFixed(2)}</span>
          <span className="text-preset-4-bold text-rose-500">
            &euro;{(price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
      <Button
        variant="icon"
        size="icon"
        aria-label="Remove product"
        className="border-rose-400 border-[1px]"
        onClick={() => handleItemRemove(id)}>
        <RemoveItem />
      </Button>
    </div>
  );
};

export default CartProduct;
