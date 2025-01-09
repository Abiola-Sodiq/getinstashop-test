import { StateCreator } from "zustand";
import { StoreType } from "../index";

export interface uiSliceType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const uiSlice: StateCreator<StoreType & uiSliceType, [], [], uiSliceType> = (
  set
) => ({
  currentStep: 0,
  setCurrentStep: (step: number) =>
    set((state) => {
      if (state.currentStep !== step) {
        return { currentStep: step };
      }
      return state;
    }),
});

export default uiSlice;
