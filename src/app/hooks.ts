
import { useDispatch, useSelector } from "react-redux";

// Импортируем ТОЛЬКО тип TypedUseSelectorHook (не попадает в JS-бандл)
import type { TypedUseSelectorHook } from "react-redux";

// Импортируем типы RootState (всё состояние Redux)
// и AppDispatch (тип dispatch из store)
import type { RootState, AppDispatch } from "./store";

// Кастомный хук для dispatch
// Позволяет dispatch'ить экшены с полной типизацией (Thunk, async и т.д.)
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Кастомный типизированный useSelector
// Теперь state внутри селекторов будет иметь тип RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// ❌ Без этого: state и dispatch часто имеют тип any

// ✅ С этим:

// автодополнение в state.auth.user

// ошибки ловятся TypeScript’ом

// идеально для Redux Toolkit