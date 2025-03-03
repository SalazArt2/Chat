import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Helmet } from "react-helmet";

function App() {
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
              <Home />
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
              <SignUp />
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
              <Login />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
