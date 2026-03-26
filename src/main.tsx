import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import { store } from "./app/store";
import { router } from "./app/router";
import { auth } from "./configs/firebase";
import { setAuthChecked, setUser } from "./store/authSlice";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

onAuthStateChanged(auth, async (firebaseUser) => {
  if (firebaseUser?.email) {
    store.dispatch(
      setUser({
        id: firebaseUser.uid,
        email: firebaseUser.email,
      })
    );
    store.dispatch(setAuthChecked(true));
    return;
  }

  store.dispatch(setUser(null));
  store.dispatch(setAuthChecked(true));
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={3000} />
  </Provider>
);

