import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Helmet } from "react-helmet";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

function App() {
  const { authUser, isLoading } = useAuthContext();
  const { t } = useTranslation();

  if (isLoading) {
    return <div>{t("loading")}</div>; // Texto traducido
  }

  return (
    <div className="p-4 h-full flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>{t("home.title")}</title>
              </Helmet>
              {authUser ? <Home /> : <Navigate to="/login" />}
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Helmet>
                <title>{t("signup.title")}</title>
              </Helmet>
              {authUser ? <Navigate to="/" /> : <SignUp />}
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Helmet>
                <title>{t("login.title")}</title>
              </Helmet>
              {authUser ? <Navigate to="/" /> : <Login />}
            </>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
