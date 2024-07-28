import { Toaster } from 'react-hot-toast';
import { Cart, List, Product, Wrapper } from './components';
import products from './data/products.json';

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
        <section className="col-span-full sm:col-span-8 md:col-span-7 lg:col-span-8">
          <h1 className="text-preset-1 mb-8">Desserts</h1>
          <List
            items={products}
            renderItem={(product) => <Product product={product} />}
            className="sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6"
          />
        </section>
        <Cart className="col-span-full md:col-span-5 lg:col-span-4" />
      </Wrapper>
    </>
  );
}

export default App;
