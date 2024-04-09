import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { appSliceZS } from "./slice/appSliceZS";
import { userSliceZS } from "./slice/userSliceZS";

export const useDashboardStore = create()(
  devtools(
    immer((...stateArgs) => ({
      app:  appSliceZS(...stateArgs),
      user: userSliceZS(...stateArgs),
      error: null,
      status: 'idle'
    }))
  )
);

const initState ={
    bears : 0,
}

export const useStore = create((set) => ({
    ...initState,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
  }))
