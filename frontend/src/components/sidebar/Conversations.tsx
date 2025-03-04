//src/components/sidebar/Conversations.tsx
//import { DUMMY_CONVERSATIONS } from "../../dummy_data/dummy";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utlis/emoji";
import Conversation from "./Conversation";

const Conversations = () => {
  const { conversations, loading } = useGetConversations();

  return (
    <div className="py-2 flex flex-col scrollbar scrollbar-thumb-secondary-content scrollbar-track-secondary overflow-auto">
      {loading && <span className="loading loading-spinner mx-auto" />}
      {conversations.length > 0
        ? conversations.map((conversation) => (
            <Conversation
              key={conversation.id}
              conversation={conversation}
              emoji={getRandomEmoji()}
            />
          ))
        : !loading && <p>No hay conversaciones disponibles.</p>}
    </div>
  );
};

export default Conversations;
