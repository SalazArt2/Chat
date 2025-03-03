const Conversation = ({ conversation }: { conversation: any }) => {
  return (
    <>
      <div
        className="flex gap-3 items-center rounded-lg p-3 cursor-pointer transition-colors duration-200 
    bg-transparent text-neutral-content hover:bg-accent hover:text-accent-content"
      >
        <div className="avatar online">
          <div className="w-8 md:w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-inherit  text-sm md:text-md">
              {conversation.fullName}
            </p>
            <span className="text-xl hidden md:inline-block">
              {conversation.emoji}
            </span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};
export default Conversation;
