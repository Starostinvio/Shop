import shoppingCartSlice from "src/modules/ShoppingCart/store";
import { ProductsState } from "src/modules/ShoppingCart/store/types";
import { headerSlice } from "src/store/headerSlice/headerSlice";
import { HeaderState } from "src/store/headerSlice/types";

import { create } from "zustand";

export const useStore = create<ProductsState & HeaderState>((...a) => ({
  ...shoppingCartSlice(...a),
  ...headerSlice(...a),
}));
