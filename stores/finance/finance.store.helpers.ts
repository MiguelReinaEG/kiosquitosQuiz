// Finance store helper functions and data

import { FinanceStoreValues } from "./finance.store.types";

import { StoreInitialValues } from "@/interfaces/stores.types";

export const defaultValues: StoreInitialValues<FinanceStoreValues> = {
  selectedCategoryId: undefined,
};
