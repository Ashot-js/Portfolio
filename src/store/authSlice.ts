// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../types/global";

// Интерфейс состояния auth
interface AuthState {
  user: Omit<User, "password"> | null; // храним только безопасные данные
}

// Функция для безопасной загрузки user из localStorage
const loadUserFromLocalStorage = (): Omit<User, "password"> | null => {
  try {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return null;

    // Парсим данные как User
    const parsedUser: User = JSON.parse(storedUser);

    // Создаём объект без password с явным типом
    const safeUser: Omit<User, "password"> = {
      id: parsedUser.id,
      email: parsedUser.email,
    };

    return safeUser;
  } catch (error) {
    console.error("Ошибка при загрузке пользователя из localStorage:", error);
    return null;
  }
};

// Начальное состояние
const initialState: AuthState = {
  user: loadUserFromLocalStorage(),
};

// Создаём slice auth
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Успешный логин
    loginSuccess(state, action: PayloadAction<Omit<User, "password">>) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    // Выход из аккаунта
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

// Экспорт actions и reducer
export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
