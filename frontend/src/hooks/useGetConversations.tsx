import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<ConversationType[]>([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/messages/conversations");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data.users);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations(); //yRsGo1vCa2PC39b4rNEfShnPqxij6WJVStq3ZvEGd9o
  }, []);
  return { loading, conversations };
};
export default useGetConversations;
