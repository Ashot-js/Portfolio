// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../types/global";

// Интерфейс состояния auth
interface AuthState {
  user: Omit<User, "password"> | null; // храним только безопасные данные
  isAuthChecked: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthChecked: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<Omit<User, "password">>) {
      state.user = action.payload;
    },
    setUser(state, action: PayloadAction<Omit<User, "password"> | null>) {
      state.user = action.payload;
    },
    setAuthChecked(state, action: PayloadAction<boolean>) {
      state.isAuthChecked = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { loginSuccess, setUser, setAuthChecked, logout } =
  authSlice.actions;
export default authSlice.reducer;
