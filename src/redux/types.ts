export type TProduct = {
  id: string;
  type: string;
  attributes: {
    name: string;
    display_price: string | null;
    price: string;
    currency: string;
    description: string | null;
    display_compare_at_price: string | null;
  };
  relationships: {
    variants: Array<object>;
  };
};

export type TProductResponse = {
  data: Array<TProduct>;
};
