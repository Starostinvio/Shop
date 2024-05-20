import { request } from "src/lib/api";
import AppRoutes from "src/lib/configs/routes";
import { HeaderState } from "src/store/headerSlice/types";
import { StateCreator } from "zustand";

const { header } = AppRoutes;

export const headerSlice: StateCreator<HeaderState> = (set) => ({
  header: null,
  headerRequest: async () => {
    return request
      .get(header)
      .then((data) => set({ header: data.data }))
      .catch((e) => {
        throw new Error(e);
      });
  },
});
