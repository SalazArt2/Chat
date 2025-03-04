import { LogOut } from "lucide-react";
import ThemeController from "./ThemeController";
import useLogout from "../../hooks/useLogout";
import { useTranslation } from "react-i18next";
import LanguageController from "./LanguageController";

const LogoutButton = () => {
  const { t } = useTranslation();
  const { logout } = useLogout();

  return (
    <div className="mt-auto flex items-center space-x-4" title={t("logout")}>
      <LogOut
        className="w-6 h-6 stroke-error cursor-pointer"
        onClick={logout}
      />
      <ThemeController />
      <LanguageController />
    </div>
  );
};

export default LogoutButton;
