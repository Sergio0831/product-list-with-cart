import { cn } from '../lib/utils';
import Spinner from './Icons/Spinner';

export interface LoaderProps extends React.ComponentProps<'div'> {}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div role="status" className={cn('flex justify-center', className)}>
      <Spinner />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
