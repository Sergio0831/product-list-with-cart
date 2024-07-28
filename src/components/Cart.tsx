import { cn } from '../lib/utils';
import useCartStore from '../store/cart';
import Button from './Button';
import CartEmpty from './CartEmpty';
import CartProduct from './CartProduct';
import CarbonNeutral from './Icons/CarbonNeutral';
import List from './List';

export interface CartProps extends React.ComponentPropsWithoutRef<'div'> {}

const Cart = ({ className, ...props }: CartProps) => {
  const { cartItems } = useCartStore();

  return (
    <div className={cn('grid gap-y-6 bg-white p-6 rounded-xl', className)} {...props}>
      <h2 className="text-preset-2 text-red">Your Cart ({cartItems.length})</h2>
      <>
        {cartItems && cartItems.length < 1 ? (
          <CartEmpty />
        ) : (
          <>
            <List items={cartItems} renderItem={(product) => <CartProduct product={product} />} />
            <div className="flex justify-between items-center">
              <span className="text-preset-4">Order Total</span>
              <span className="text-preset-2 text-rose-900">&euro;{(46.5).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-center gap-x-2 bg-rose-50 rounded-lg p-4">
              <CarbonNeutral />
              <p className="text-preset-4">
                This is a <span className="text-preset-4-bold text-rose-900">carbon-neutral</span>{' '}
                delivery
              </p>
            </div>
            <Button>Confirm Order</Button>
          </>
        )}
      </>
    </div>
  );
};

export default Cart;
