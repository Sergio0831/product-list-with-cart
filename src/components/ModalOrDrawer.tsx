import { useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Modal, ModalContent, ModalTrigger } from './Modal';
import Button from './Button';
import List from './List';
import ModalProduct from './ModalProduct';
import CartTotal from './CartTotal';
import { Drawer, DrawerContent, DrawerTrigger } from './Drawer';
import { CartProductTypes } from '../types';

interface ModalOrDrawerProps {
  cartItems: CartProductTypes[];
  totalAmount: () => number;
  clearCart: () => void;
}

const ModalOrDrawer = ({ cartItems, totalAmount, clearCart }: ModalOrDrawerProps) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 640px)');

  if (isDesktop) {
    return (
      <Modal open={open} onOpenChange={setOpen}>
        <ModalTrigger asChild>
          <Button aria-label="Confirm Order">Confirm Order</Button>
        </ModalTrigger>
        <ModalContent
          title="Order Confirmed"
          description="We hope you enjoy your food!"
          closeBtnTitle="Start New Order"
          clearCart={clearCart}>
          <div className="grid gap-y-6 bg-rose-50 rounded-lg p-6">
            <List items={cartItems} renderItem={(product) => <ModalProduct product={product} />} />
            <CartTotal totalAmount={totalAmount()} />
          </div>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button aria-label="Confirm Order">Confirm Order</Button>
      </DrawerTrigger>
      <DrawerContent
        title="Order Confirmed"
        description="We hope you enjoy your food!"
        closeBtnTitle="Start New Order"
        clearCart={clearCart}>
        <div className="grid gap-y-6 bg-rose-50 rounded-lg p-6">
          <List items={cartItems} renderItem={(product) => <ModalProduct product={product} />} />
          <CartTotal totalAmount={totalAmount()} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ModalOrDrawer;
