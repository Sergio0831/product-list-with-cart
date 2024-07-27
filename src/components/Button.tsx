import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'text-preset-3 text-white bg-red hover:bg-dark-red',
        outline:
          'text-preset-4-bold bg-white text-rose-900 border-2 border-rose-400 hover:text-red hover:border-red',
        icon: 'border-2 border-inherit',
      },
      size: {
        primary: 'py-4 px-6',
        md: 'h-11 p-3',
        icon: 'h-5 w-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'primary',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
};

export default Button;
