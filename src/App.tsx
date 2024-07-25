import { Cart, CartEmpty, List, Product, Wrapper } from './components';
import products from './data/products.json';

function App() {
  return (
    <Wrapper className="py-6 sm:py-10 md:py-20">
      <section className="col-span-full sm:col-span-8 md:col-span-7 lg:col-span-8">
        <h1 className="text-preset-1 mb-8">Desserts</h1>
        <List items={products} renderItem={Product} className="sm:grid-cols-2 lg:grid-cols-3" />
      </section>
      <Cart className="col-span-full md:col-span-5 lg:col-span-4">
        <CartEmpty />
      </Cart>
    </Wrapper>
  );
}

export default App;
