import { create } from "zustand";

interface INumInfo {
  radioGroup: number;
  number: number;
}

export interface StoreState {
  numInfo: INumInfo | null;
  info: string;
  randomInfo: string;
  currentId: number;
}

const useStore = create<StoreState>((set) => ({
  numInfo: null,
  info: "",
  randomInfo: "",
  currentId: 0,
}));

export default useStore;
