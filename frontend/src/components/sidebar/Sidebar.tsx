import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
const Sidebar = () => {
  return (
    // Sidebar.tsx
    <div className="border-r border-base-300 p-1 md:p-4 flex flex-col w-1/3 md:w-1/6">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
