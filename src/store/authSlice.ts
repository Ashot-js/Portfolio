// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../types/global";

// Интерфейс состояния auth
interface AuthState {
  user: Omit<User, "password"> | null; // храним только безопасные данные
}

const initialState: AuthState = {
  user: null,
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
    logout(state) {
      state.user = null;
    },
  },
});

export const { loginSuccess, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
