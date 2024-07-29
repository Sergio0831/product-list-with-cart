import { cn } from '../lib/utils';

export interface CartTotalProps extends React.ComponentPropsWithoutRef<'div'> {
  totalAmount: number;
}

const CartTotal = ({ totalAmount, className, ...props }: CartTotalProps) => {
  return (
    <div className={cn('flex justify-between items-center', className)} {...props}>
      <span className="text-preset-4">Order Total</span>
      <span className="text-preset-2 text-rose-900">&euro;{totalAmount.toFixed(2)}</span>
    </div>
  );
};

export default CartTotal;
