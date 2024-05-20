import { request } from "src/lib/api";
import AppRoutes from "src/lib/configs/routes";
import { ProductsState } from "src/modules/ShoppingCart/store/types";
import { Product, ResponseProduct } from "src/types";
import { StateCreator } from "zustand";

const {
  products: prodName,
  basketSummary,
  removeProduct,
  quantityIncProduct,
  quantityDecProduct,
  create,
} = AppRoutes;

const shoppingCartSlice: StateCreator<ProductsState> = (set) => ({
  products: [],
  basketTotal: null,
  setProducts: async () => {
    return request.get(prodName).then((data) => {
      const correctedData = data.data.map((product: ResponseProduct) => ({
        ...product,
        Currency: product["Сurrency"],
      }));
      set({ products: correctedData });
      return data.data as Product[];
    });
  },
  removeProducts: async () => {
    return request.delete(prodName).then(() => {
      set({ products: [], basketTotal: null });
    });
  },
  quantityIncProduct: async (ProductId, UserGuid) => {
    return request.post(quantityIncProduct, { ProductId, UserGuid });
  },
  quantityDecProduct: async (ProductId, UserGuid) => {
    return request.post(quantityDecProduct, { ProductId, UserGuid });
  },
  removeProduct: async (ProductId, UserGuid) => {
    return request.delete(removeProduct, { data: { ProductId, UserGuid } });
  },
  basketSummary: async () => {
    return request.get(basketSummary).then((data) => {
      set({ basketTotal: data.data });
    });
  },
  createBasket: async () => {
    return request.post(create()).catch((e) => {
      throw new Error(e);
    });
  },
});

export default shoppingCartSlice;
