import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Helmet } from "react-helmet";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser, isLoading } = useAuthContext();

  if (isLoading) {
    // Puedes agregar un loading spinner o algo mientras verificas la autenticación
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 h-full flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Inicio - Chat</title>
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
                <title>Registrarse - Chat</title>
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
                <title>Iniciar Sesión - Chat</title>
              </Helmet>
              {authUser ? <Navigate to="/" /> : <Login />}
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
