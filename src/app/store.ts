import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // пока нет редьюсеров
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;