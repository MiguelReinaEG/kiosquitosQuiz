// Finance store

import { create } from "zustand";

import { defaultValues } from "./finance.store.helpers";
import { FinanceStoreValues } from "./finance.store.types";

import { getStoreSetState } from "@/utils/store.utils";

export const useFinanceStore = create<FinanceStoreValues>((set, get) => {
  return {
    ...defaultValues,
    setSelectedCategoryId: (payload) => {
      const prev = get().selectedCategoryId;
      const selectedCategoryId = getStoreSetState(payload, prev);
      set({ selectedCategoryId });
    },
    reset: () => set({ ...defaultValues }),
  };
});
