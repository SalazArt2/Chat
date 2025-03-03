import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-screen w-full rounded-lg bg-neutral">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
