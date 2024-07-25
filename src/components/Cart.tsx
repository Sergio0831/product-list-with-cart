import { cn } from '../lib/utils';

export interface CartProps extends React.ComponentPropsWithoutRef<'div'> {}

const Cart = ({ children, className, ...props }: CartProps) => {
  return (
    <div className={cn('bg-white p-6 rounded-xl', className)} {...props}>
      <h2 className="text-preset-2 text-red mb-6">Your Cart (0)</h2>
      <div>{children}</div>
    </div>
  );
};

export default Cart;
