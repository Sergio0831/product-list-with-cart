import { LazyLoadImage } from 'react-lazy-load-image-component';
import { cn } from '../lib/utils';
import { CartProductTypes } from '../types';
import 'react-lazy-load-image-component/src/effects/blur.css';

export interface ModalProductProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'id'> {
  product: CartProductTypes;
}

const ModalProduct = ({ product, className }: ModalProductProps) => {
  const { name, price, quantity, thumbnail } = product;

  return (
    <div
      className={cn(
        'flex items-center justify-between py-4 border-b-[1px] border-b-rose-100',
        className,
      )}>
      <div className="flex items-center gap-x-4">
        <LazyLoadImage
          className="w-12 h-12 rounded-[4px]"
          src={thumbnail}
          alt={name}
          effect="blur"
          placeholderSrc={thumbnail}
          width={48}
          height={48}
        />
        <div>
          <h3 className="text-preset-4-bold text-rose-900 mb-2">{name}</h3>
          <div className="flex gap-x-2 items-center">
            <span className="text-preset-4-bold text-red">{quantity}x</span>
            <span className="text-preset-4 text-rose-500">&#64; &euro;{price.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <span className="text-preset-3 text-rose-900">&euro;{(price * quantity).toFixed(2)}</span>
    </div>
  );
};

export default ModalProduct;
