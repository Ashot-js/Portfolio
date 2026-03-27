import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./MainLayout.scss";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../configs/firebase";
import { useAppDispatch } from "../../app/hooks";
import { loginSuccess } from "../../store/authSlice";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          loginSuccess({
            id: user.uid,
            email: user.email ?? "", // ✅ фикс ошибки
          }),
        );
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  // ⛔ ждём пока Firebase проверит пользователя
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MainLayout">
      <Navbar />

      <main className="MainLayout_mainContent">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;

// import { Outlet } from "react-router";
// import Navbar from "../navbar/Navbar";
// import Footer from "../footer/Footer";
// import "./MainLayout.scss";

// const MainLayout = () => {
//   return (
//     <div className="MainLayout">
//       <Navbar />

//       <main className="MainLayout_mainContent">
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;
