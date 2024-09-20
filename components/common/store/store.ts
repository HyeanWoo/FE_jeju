import { create } from "zustand";

interface State {
  isKakaoMapLoad: Boolean;
  setKakaoMapLoadTrue: () => void;
}

const useStore = create<State>((set) => ({
  // states
  isKakaoMapLoad: false,
  // functions
  setKakaoMapLoadTrue: () => set({ isKakaoMapLoad: true }),
}));

export default useStore;
