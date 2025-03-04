//import { DUMMY_CONVERSATIONS } from "../../dummy_data/dummy";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utlis/emoji";
import Conversation from "./Conversation";

const Conversations = () => {
  const { conversations, loading } = useGetConversations();
  return (
    <div className="py-2 flex flex-col scrollbar scrollbar-thumb-secondary-content scrollbar-track-secondary overflow-y-scroll">
      {conversations.map((conversation) => (
        <Conversation
          key={conversation.id}
          conversation={conversation}
          emoji={getRandomEmoji()}
        />
      ))}
      {loading ? <span className="loading loading-spinner mx-auto" /> : null}
    </div>
  );
};
export default Conversations;
