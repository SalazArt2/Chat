import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import SocketContextProvider from "./context/SocketContext.tsx";
import "./i18n/i18n.ts"; // Asegúrate de importar la configuración
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </SocketContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
