import { cn } from '../lib/utils';
import Button from './Button';
import AddToCart from './Icons/AddToCart';

export interface ProductProps extends React.ComponentPropsWithoutRef<'article'> {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

const Product = ({ image, name, category, price, className }: ProductProps) => {
  return (
    <article className={cn('grid', className)}>
      <picture>
        <source srcSet={image.desktop} media="(min-width: 768px)" />
        <source srcSet={image.tablet} media="(min-width: 640px)" />
        <img src={image.mobile} alt={name} loading="lazy" className="rounded-lg" />
      </picture>
      <Button variant="outline" size="md" className="w-40 gap-x-2 justify-self-center -mt-6 mb-4">
        <AddToCart />
        Add to Cart
      </Button>
      <div>
        <h2 className="text-preset-4 text-rose-500">{category}</h2>
        <h3 className="text-preset-3 my-1">{name}</h3>
        <span className="text-preset-3 text-red">&euro;{price.toFixed(2)}</span>
      </div>
    </article>
  );
};

export default Product;
