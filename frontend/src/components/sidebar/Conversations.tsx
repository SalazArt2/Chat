import { DUMMY_CONVERSATIONS } from "../../dummy_data/dummy";
import Conversation from "./Conversation";

const Conversations = () => {
  return (
    <div className="py-2 flex flex-col scrollbar scrollbar-thumb-secondary-content scrollbar-track-secondary overflow-y-scroll">
      {DUMMY_CONVERSATIONS.map((conversation) => (
        <Conversation key={conversation.id} conversation={conversation} />
      ))}
    </div>
  );
};
export default Conversations;
