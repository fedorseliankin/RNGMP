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
};

export type TProductResponse = {
  data: Array<TProduct>;
};

export type TProductParams = {
  name?: string,
  id?: string,
};

export type TCreateAccauntParams = {
  email: string;
  first_name: string;
  last_name: string;
  selected_locale: string;
  password: string;
  password_confirmation: string;
  public_metadata: object;
  private_metadata: object;
};

export type TUser = {
  id: string;
  type: string;
  attributes: string;
  relationships: string;
};

export type TUserResponse = {
  data: TUser;
}