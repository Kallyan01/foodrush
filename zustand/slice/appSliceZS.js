/* eslint-disable @typescript-eslint/no-unused-vars */
const appInitialState={
    app: {
        activeScreen: "home",
    },
    status: "idle",
    error: {
        message: "",
    }
    };

export const appSliceZS = (set, get) => ({
  ...appInitialState,
  setScreen: (screen) => {
    set((state) => {
      state.app.activeScreen = screen;
    });
  },
  setGlobalStatus(status) {
    set((state) => {
      state.status = status;
    })
  },
});
