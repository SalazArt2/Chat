import { LogOut } from "lucide-react";
import ThemeController from "./ThemeController";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { logout } = useLogout();

  return (
    <div className="mt-auto flex items-center space-x-4">
      <LogOut
        className="w-6 h-6 stroke-error cursor-pointer"
        onClick={logout}
      />
      <ThemeController />
    </div>
  );
};

export default LogoutButton;
