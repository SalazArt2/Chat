import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utlis/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }: { message: MessageType }) => {
  const { authUser } = useAuthContext();
  const fromMe = message.senderId === authUser?.id;
  const chatClass = fromMe ? "chat-end" : "chat-start";
  const { selectedConversation } = useConversation();
  const img = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;

  const bubbleBg = fromMe ? "bg-blue-500" : "bg-accent";
  const bubbleTxt = fromMe ? "text-white" : "text-base-200";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClass}`}>
      <div className="hidden md:block chat-image avatar">
        <div className="w-6 md:w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={img} />
        </div>
      </div>
      <p
        className={`chat-bubble ${bubbleTxt} ${bubbleBg} ${shakeClass} text-sm md:text-md`}
      >
        {message.body}
      </p>
      <span className="chat-footer opacity-50 text-xs flex gap-1 items-center text-info">
        {extractTime(message.createdAt)}
      </span>
    </div>
  );
};
export default Message;
