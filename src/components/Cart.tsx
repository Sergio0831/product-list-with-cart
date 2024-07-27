import { cn } from '../lib/utils';
import useCartStore from '../store/cart';
import CartEmpty from './CartEmpty';

export interface CartProps extends React.ComponentPropsWithoutRef<'div'> {}

const Cart = ({ className, ...props }: CartProps) => {
  const { cartItems } = useCartStore();

  return (
    <div className={cn('bg-white p-6 rounded-xl', className)} {...props}>
      <h2 className="text-preset-2 text-red mb-6">Your Cart ({cartItems.length})</h2>
      <div>
        {cartItems && cartItems.length < 1 ? (
          <CartEmpty />
        ) : (
          cartItems.map((cartItem) => (
            <h3 key={cartItem.id} className="text-preset-4-bold">
              {cartItem.name}
            </h3>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
