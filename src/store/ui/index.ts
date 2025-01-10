import { StateCreator } from "zustand";
import { StoreType } from "../index";

export interface uiSliceType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isOpened: boolean;
  setIsOpened: () => void;
  isInventoryChecked: boolean;
  setIsInventoryChecked: () => void;
  addLabel: boolean;
  setAddLabel: () => void;
  deleteLabel: boolean;
  setDeleteLabel: () => void;
  labelList: string[];
  setLabelList: (label: string[]) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
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
  isOpened: true,
  setIsOpened: () =>
    set((state) => ({
      isOpened: !state.isOpened,
    })),
  isInventoryChecked: true,
  setIsInventoryChecked: () =>
    set((state) => ({
      isInventoryChecked: !state.isInventoryChecked,
    })),
  addLabel: true,
  setAddLabel: () =>
    set((state) => ({
      addLabel: !state.addLabel,
    })),
  deleteLabel: true,
  setDeleteLabel: () =>
    set((state) => ({
      deleteLabel: !state.deleteLabel,
    })),
  labelList: [],
  setLabelList: (label: string[]) => {
    set(() => ({
      labelList: label,
    }));
  },
  inputValue: "",
  setInputValue: (value: string) => {
    set(() => ({
      inputValue: value,
    }));
  },
});

export default uiSlice;
