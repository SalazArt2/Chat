import useConversation from "../../zustand/useConversation";

const Conversation = ({
  conversation,
  emoji,
}: {
  conversation: ConversationType;
  emoji: string;
}) => {
  const { setSelectedConversation, selectedConversation } = useConversation();
  const isSelected = selectedConversation?.id === conversation.id;
  const isOnline = false;
  return (
    <>
      <div
        className={`flex gap-3 items-center rounded-lg p-3 cursor-pointer transition-colors duration-200 
    hover:bg-accent hover:text-accent-content ${
      isSelected
        ? "bg-accent text-accent-content"
        : "bg-transparent text-neutral-content "
    }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div
          className={`avatar ${isOnline ? "avatar-online" : "avatar-offline"}`}
        >
          <div className="w-8 md:w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-inherit  text-sm md:text-md">
              {conversation.fullName}
            </p>
            <span className="text-xl hidden md:inline-block">{emoji}</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};
export default Conversation;
