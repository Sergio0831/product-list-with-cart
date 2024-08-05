import toast from 'react-hot-toast';
import { cn } from '../lib/utils';
import useCartStore from '../store/cart';
import Button from './Button';
import AddToCart from './Icons/AddToCart';
import QuantityButton from './QuantityButton';
import { ProductTypes } from '../types';

export interface ProductProps extends Omit<React.ComponentPropsWithoutRef<'article'>, 'id'> {
  product: ProductTypes;
}

const Product = ({ product, className }: ProductProps) => {
  const { addItemToCart, itemExist } = useCartStore();
  const { id, image, name, category, price } = product;

  const productToCart = {
    id,
    name,
    thumbnail: image.thumbnail,
    price,
    quantity: 1,
  };

  const handleAddToCart = () => {
    addItemToCart(productToCart);
    toast.success(`${productToCart.name} added to cart.`);
  };

  return (
    <article className={cn('grid', className)}>
      <picture>
        <source srcSet={image.desktop} media="(min-width: 768px)" />
        <source srcSet={image.tablet} media="(min-width: 640px)" />
        <img src={image.mobile} alt={name} className="rounded-lg w-full" width={502} height={408} />
      </picture>
      {itemExist(id) ? (
        <QuantityButton productId={id} className="w-40 gap-x-2 justify-self-center -mt-6 mb-4" />
      ) : (
        <Button
          variant="outline"
          size="md"
          className="w-40 gap-x-2 justify-self-center -mt-6 mb-4"
          onClick={handleAddToCart}>
          <AddToCart />
          Add to Cart
        </Button>
      )}
      <div>
        <h2 className="text-preset-4 text-rose-500">{category}</h2>
        <h3 className="text-preset-3 my-1 text-rose-900">{name}</h3>
        <span className="text-preset-3 text-red">&euro;{price.toFixed(2)}</span>
      </div>
    </article>
  );
};

export default Product;
