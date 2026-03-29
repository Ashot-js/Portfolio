
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Redux Toolkit (store + slice)
//         ↓
// типы (RootState, AppDispatch)
//         ↓
// твои хуки (useAppDispatch, useAppSelector)
//         ↓
// компоненты React

// Простыми словами

// умный мост между React и Redux Toolkit