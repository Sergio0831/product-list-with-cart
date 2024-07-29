import { cn } from '../lib/utils';
import useCartStore from '../store/cart';
import Button from './Button';
import CartEmpty from './CartEmpty';
import CartProduct from './CartProduct';
import CartTotal from './CartTotal';
import { Modal, ModalContent, ModalTrigger } from './Modal';
import CarbonNeutral from './Icons/CarbonNeutral';
import List from './List';
import ModalProduct from './ModalProduct';

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
            <Modal>
              <ModalTrigger asChild>
                <Button>Confirm Order</Button>
              </ModalTrigger>
              <ModalContent
                title="Order Confirmed"
                description="We hope you enjoy your food!"
                closeBtnTitle="Start New Order"
                clearCart={clearCart}>
                <div className="grid gap-y-6 bg-rose-50 rounded-lg p-6">
                  <List
                    items={cartItems}
                    renderItem={(product) => <ModalProduct product={product} />}
                  />
                  <CartTotal totalAmount={totalAmount()} />
                </div>
              </ModalContent>
            </Modal>
          </>
        )}
      </>
    </div>
  );
};

export default Cart;
