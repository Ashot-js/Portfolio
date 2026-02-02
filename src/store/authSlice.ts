// Импортируем функцию createSlice из Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Импортируем тип PayloadAction для типизации action.payload
import type { PayloadAction } from "@reduxjs/toolkit";

// Импортируем тип User (описание пользователя)
import type { User } from "../types/User";

// Описываем интерфейс состояния auth
interface AuthState {
  // user может быть объектом User или null (если не авторизован)
  user: User | null;
}

// Начальное состояние auth
const initialState: AuthState = {
  // Пытаемся получить пользователя из localStorage
  // localStorage.getItem("user") возвращает string | null
  // Если null — подставляем строку "null"
  // JSON.parse("null") → null
  user: JSON.parse(localStorage.getItem("user") || "null"),
};

// Создаём slice (часть Redux store)
const authSlice = createSlice({
  // Имя slice (будет использоваться в Redux DevTools)
  name: "auth",

  // Начальное состояние
  initialState,

  // Reducers — функции, которые меняют состояние
  reducers: {
    // Reducer для успешного логина
    loginSuccess(state, action: PayloadAction<User>) {
      // Сохраняем пользователя в Redux state
      state.user = action.payload;

      // Сохраняем пользователя в localStorage
      // чтобы он не пропал после перезагрузки страницы
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    // Reducer для выхода из аккаунта
    logout(state) {
      // Очищаем пользователя в Redux state
      state.user = null;

      // Удаляем пользователя из localStorage
      localStorage.removeItem("user");
    },
  },
});

// Экспортируем actions (loginSuccess и logout)
export const { loginSuccess, logout } = authSlice.actions;

// Экспортируем reducer для подключения в store
export default authSlice.reducer;


// Redux хранит текущего пользователя
// localStorage — чтобы не выкидывало при перезагрузке