import { Toaster } from 'react-hot-toast';
import products from './data/products.json';
import { lazy, Suspense } from 'react';
import { Wrapper } from './components';
import { ProductTypes } from './types';
import { ListProps } from './components/List';
import Loader from './components/Loader';

const Cart = lazy(() => import('./components/Cart'));
const List = lazy(() => import('./components/List')) as React.FC<ListProps<ProductTypes>>;
const Product = lazy(() => import('./components/Product'));

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            color: 'var(--rose-900)',
          },
          duration: 3000,
          iconTheme: {
            primary: 'var( --green)',
            secondary: '',
          },
        }}
      />
      <Wrapper className="py-6 sm:py-10 md:py-20">
        <Suspense fallback={<Loader className="col-span-full" />}>
          <section className="col-span-full sm:col-span-8 md:col-span-7 lg:col-span-8">
            <h1 className="text-preset-1 mb-8">Desserts</h1>
            <List
              items={products as ProductTypes[]}
              renderItem={(product: ProductTypes) => <Product product={product} />}
              className="sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6"
            />
          </section>
          <Cart className="col-span-full md:col-span-5 lg:col-span-4" />
        </Suspense>
      </Wrapper>
    </>
  );
}

export default App;
