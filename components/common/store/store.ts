import { create } from "zustand";

interface State {
  isKakaoMapLoad: Boolean;
  userId: number;
  setKakaoMapLoadTrue: () => void;
  setUserId: (userId: number) => void;
}

const useStore = create<State>((set) => ({
  // states
  isKakaoMapLoad: false,
  userId: 0,
  // functions
  setKakaoMapLoadTrue: () =>
    set((state) => {
      return { ...state, isKakaoMapLoad: true };
    }),
  setUserId: (userId: number) =>
    set((state) => {
      return { ...state, userId };
    }),
}));

export default useStore;
