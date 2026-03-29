
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice";

// Создаём Redux-хранилище
export const store = configureStore({
  // Объект reducer объединяет все редьюсеры приложения
  reducer: {
    // auth — ключ состояния в Redux (state.auth)
    // authReducer — логика изменения этого состояния
    auth: authReducer,
  },
});

// Тип RootState автоматически выводит тип всего Redux state.
// Используется для типизации useSelector.
export type RootState = ReturnType<typeof store.getState>;

// Тип AppDispatch — тип функции dispatch из текущего store.
// Используется для типизации useDispatch.
export type AppDispatch = typeof store.dispatch;


