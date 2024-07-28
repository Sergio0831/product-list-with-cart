import { cn } from '../lib/utils';
import useCartStore from '../store/cart';
import Button from './Button';
import Decrement from './Icons/Decrement';
import Increment from './Icons/Increment';

export interface QuantityButtonProps extends React.ComponentPropsWithoutRef<'div'> {
  productId: number;
}

const QuantityButton = ({ productId, className, ...props }: QuantityButtonProps) => {
  const { increaseQuantity, decreaseQuantity } = useCartStore();

  return (
    <div
      className={cn(
        'font-semibold rounded-full flex justify-between items-center text-white bg-red h-11 p-3',
        className,
      )}
      {...props}>
      <Button
        variant="icon"
        size="icon"
        className="border-white"
        onClick={() => decreaseQuantity(productId)}>
        <Decrement />
      </Button>
      1
      <Button
        variant="icon"
        size="icon"
        className="border-white"
        onClick={() => increaseQuantity(productId)}>
        <Increment />
      </Button>
    </div>
  );
};

export default QuantityButton;
