import { createSlice, } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; 
import type { User } from "../types/User";

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;


// Redux хранит текущего пользователя
// localStorage — чтобы не выкидывало при перезагрузке