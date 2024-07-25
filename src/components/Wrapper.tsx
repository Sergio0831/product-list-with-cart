import { cn } from '../lib/utils';

export interface WrapperProps extends React.ComponentPropsWithoutRef<'div'> {}

const Wrapper = ({ children, className, ...props }: WrapperProps) => {
  return (
    <div
      className={cn(
        'container grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-8 gap-y-8 items-start max-w-7xl px-6 sm:px-10',
        className,
      )}
      {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
