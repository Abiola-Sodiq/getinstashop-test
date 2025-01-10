import { create } from "zustand";
import { devtools } from "zustand/middleware";
import uiSlice, { uiSliceType } from "./ui";

export type StoreType = uiSliceType

const useStore = create<StoreType>()(
  devtools((set, get, api) => ({
    ...uiSlice(set, get, api),
  }))
);

export default useStore;
