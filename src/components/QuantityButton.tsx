import { cn } from '../lib/utils';
import Button from './Button';
import Decrement from './Icons/Decrement';
import Increment from './Icons/Increment';

export interface QuantityButtonProps extends React.ComponentPropsWithoutRef<'div'> {}

const QuantityButton = ({ className, ...props }: QuantityButtonProps) => {
  return (
    <div
      className={cn(
        'font-semibold rounded-full flex justify-between items-center text-white bg-red h-11 p-3',
        className,
      )}
      {...props}>
      <Button variant="icon" size="icon">
        <Decrement />
      </Button>
      1
      <Button variant="icon" size="icon">
        <Increment />
      </Button>
    </div>
  );
};

export default QuantityButton;
