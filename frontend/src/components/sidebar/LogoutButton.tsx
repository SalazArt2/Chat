import { LogOut } from "lucide-react";
import ThemeController from "./ThemeController";

const LogoutButton = () => {
  const logout = () => {
    alert("You are logged out");
  };

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
