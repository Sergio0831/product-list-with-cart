import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '../lib/utils';
import React from 'react';
import Button from './Button';
import Confirmed from './Icons/Confirmed';

const Modal = DialogPrimitive.Root;
const ModalTrigger = DialogPrimitive.Trigger;
const ModalPortal = DialogPrimitive.Portal;
const ModalClose = DialogPrimitive.Close;

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
));

interface ModalContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  title: string;
  description: string;
  closeBtnTitle: string;
  clearCart: () => void;
}

const ModalContent = ({
  className,
  children,
  title,
  description,
  closeBtnTitle,
  clearCart,
}: ModalContentProps) => (
  <ModalPortal>
    <ModalOverlay />
    <DialogPrimitive.Content
      className={cn(
        'bg-white rounded-xl fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 grid gap-y-8 w-full max-w-xl max-h-[90dvh] overflow-scroll duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
        className,
      )}>
      <div className="grid gap-y-6">
        <Confirmed />
        <div>
          <DialogPrimitive.Title className="text-preset-1 text-rose-900 mb-2">
            {title}
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="text-rose-500">
            {description}
          </DialogPrimitive.Description>
        </div>
      </div>
      {children}
      <ModalClose onClick={() => clearCart()} asChild>
        <Button>{closeBtnTitle}</Button>
      </ModalClose>
    </DialogPrimitive.Content>
  </ModalPortal>
);

export { Modal, ModalPortal, ModalOverlay, ModalTrigger, ModalClose, ModalContent };
