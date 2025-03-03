import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
const Sidebar = () => {
  return (
    <div className="border-r border-base-300 p-1 md:p-4 flex flex-col w-full md:w-1/4">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
