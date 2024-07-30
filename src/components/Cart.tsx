import { cn } from '../lib/utils';
import useCartStore from '../store/cart';
import CartEmpty from './CartEmpty';
import CartProduct from './CartProduct';
import CartTotal from './CartTotal';
import CarbonNeutral from './Icons/CarbonNeutral';
import List from './List';
import ModalOrDrawer from './ModalOrDrawer';

export interface CartProps extends React.ComponentPropsWithoutRef<'div'> {}

const Cart = ({ className, ...props }: CartProps) => {
  const { cartItems, totalAmount, clearCart } = useCartStore();

  return (
    <div className={cn('grid gap-y-6 bg-white p-6 rounded-xl', className)} {...props}>
      <h2 className="text-preset-2 text-red">Your Cart ({cartItems.length})</h2>
      <>
        {cartItems && cartItems.length < 1 ? (
          <CartEmpty />
        ) : (
          <>
            <List items={cartItems} renderItem={(product) => <CartProduct product={product} />} />
            <CartTotal totalAmount={totalAmount()} />
            <div className="flex items-center justify-center gap-x-2 bg-rose-50 rounded-lg p-4">
              <CarbonNeutral />
              <p className="text-preset-4">
                This is a <span className="text-preset-4-bold text-rose-900">carbon-neutral</span>{' '}
                delivery
              </p>
            </div>
            <ModalOrDrawer cartItems={cartItems} clearCart={clearCart} totalAmount={totalAmount} />
          </>
        )}
      </>
    </div>
  );
};

export default Cart;
