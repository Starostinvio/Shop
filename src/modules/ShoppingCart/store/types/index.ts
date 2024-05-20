import { AxiosResponse } from "axios";
import { Product } from "src/types";

interface BasketTotal {
  TotalProducts: number;
  Discount: number;
  Total: number;
}

export interface ProductsState {
  products: Product[];
  basketTotal: BasketTotal | null;
  setProducts: () => Promise<void | Product[]>;
  removeProducts: () => Promise<void | AxiosResponse>;
  removeProduct: (
    ProductId: number,
    UserGuid: string
  ) => Promise<void | AxiosResponse>;

  quantityIncProduct: (
    ProductId: number,
    UserGuid: string
  ) => Promise<void | AxiosResponse>;
  quantityDecProduct: (
    ProductId: number,
    UserGuid: string
  ) => Promise<void | AxiosResponse>;
  basketSummary: () => Promise<void | AxiosResponse>;
  createBasket: () => Promise<AxiosResponse>;
}
