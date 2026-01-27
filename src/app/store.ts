import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




// src/
// ├─ app/
// │  ├─ store.ts        // Redux store (глобальное состояние)
// │  ├─ hooks.ts        // typed hooks для Redux
// │  └─ router.tsx     // конфигурация роутинга
