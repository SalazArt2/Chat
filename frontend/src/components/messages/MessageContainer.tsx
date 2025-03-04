import MessageInput from "./MessageInput";
import Messages from "./Messages";
import useConversation from "../../zustand/useConversation";
import { MessageCircle } from "lucide-react";
import { useAuthContext } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";

const MessageContainer = () => {
  const { selectedConversation } = useConversation();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col flex-1 w-2/3 md:w-5/6">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-neutral px-4 py-2 mb-2">
            <span className="label-text text-info">{t("chat.to")}:</span>{" "}
            <span className="text-neutral-content font-bold">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>
          {t("welcome")} 👋 {authUser?.fullName} ❄
        </p>
        <p>{t("chat.select")}</p>
        <MessageCircle className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
