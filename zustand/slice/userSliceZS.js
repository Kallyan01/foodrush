import { produce } from "immer";

const userInitialState={
    name: "Test Name",
    email: "Test Email",
    cart: [ ],
    item: 0,
    status: "idle",
    error: {
        message: "",
    }
    };

    export const userSliceZS = (set) => ({
        ...userInitialState,
        setCart: (data) =>
          set((state) => {
            const updatedCart = [...state.user.cart, data];
            state.user.cart = updatedCart;
          }
          ),
        removeCart: (data) =>
        set((state) => {
          const updatedCart = state.user.cart.filter((item) => item.name !== data);
          state.user.cart = updatedCart;
        }),
      });
