import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '../lib/utils';
import Button from './Button';
import Confirmed from './Icons/Confirmed';

const Drawer = ({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root {...props} />
);

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;
const DrawerTitle = DrawerPrimitive.Title;
const DrawerDescription = DrawerPrimitive.Description;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black-50', className)}
    {...props}
  />
));

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
  title: string;
  description: string;
  closeBtnTitle: string;
  clearCart: () => void;
}

const DrawerContent = ({
  className,
  children,
  title,
  description,
  closeBtnTitle,
  clearCart,
  ...props
}: DrawerContentProps) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      className={cn(
        'bg-white rounded-t-xl h-auto fixed z-50 inset-x-0 bottom-0 p-10 grid gap-y-8',
        className,
      )}
      {...props}>
      <div className="grid gap-y-6">
        <Confirmed />
        <div>
          <DrawerTitle className="text-preset-1 text-rose-900 mb-2">{title}</DrawerTitle>
          <DrawerDescription className="text-rose-500">{description}</DrawerDescription>
        </div>
      </div>
      {children}
      <DrawerClose asChild>
        <Button onClick={() => clearCart()} arai-label={closeBtnTitle}>
          {closeBtnTitle}
        </Button>
      </DrawerClose>
    </DrawerPrimitive.Content>
  </DrawerPortal>
);

export { Drawer, DrawerTrigger, DrawerContent };
