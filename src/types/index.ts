export type ProductTypes = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  id: number;
  name: string;
  category: string;
  price: number;
};

export type CartProductTypes = Pick<ProductTypes, 'id' | 'name' | 'price'> & {
  thumbnail: string;
  quantity: number;
};
