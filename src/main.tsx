import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import { store } from "./app/store";
import { router } from "./app/router";
import { auth } from "./configs/firebase";
import { setUser } from "./store/authSlice";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

onAuthStateChanged(auth, (firebaseUser) => {
  if (firebaseUser?.email) {
    store.dispatch(
      setUser({
        id: firebaseUser.uid,
        email: firebaseUser.email,
      })
    );
    return;
  }

  store.dispatch(setUser(null));
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={3000} />
  </Provider>
);

