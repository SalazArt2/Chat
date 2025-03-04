import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  useRef,
} from "react";
import { useAuthContext } from "./AuthContext";
import io, { Socket } from "socket.io-client";

interface ISocketContext {
  socket: Socket | null;
  onlineUsers: string[];
  conversations: ConversationType[];
  setConversations: React.Dispatch<React.SetStateAction<ConversationType[]>>;
}

const SocketContext = createContext<ISocketContext | undefined>(undefined);

export const useSocketContext = (): ISocketContext => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error(
      "useSocketContext must be used within a SocketContextProvider"
    );
  }
  return context;
};

const socketURL =
  import.meta.env.MODE === "development" ? "http://localhost:3000" : "/";

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const socketRef = useRef<Socket | null>(null);

  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [conversations, setConversations] = useState<ConversationType[]>([]);
  const { authUser, isLoading } = useAuthContext();

  const fetchConversations = async () => {
    try {
      const res = await fetch("/api/messages/conversations");
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setConversations(data.users);
    } catch (error: any) {
      console.error("Error al obtener conversaciones:", error.message);
    }
  };

  useEffect(() => {
    if (authUser && !isLoading) {
      const socket = io(socketURL, {
        query: {
          userId: authUser.id,
        },
      });
      socketRef.current = socket;

      socket.on("getOnlineUsers", (users: string[]) => {
        setOnlineUsers(users);
      });

      // Actualizar las conversaciones solo cuando se reciba el evento
      socket.on("updateConversations", async () => {
        await fetchConversations();
      });

      // Inicializar las conversaciones al principio
      fetchConversations();

      return () => {
        socket.close();
        socketRef.current = null;
      };
    }
  }, [authUser, isLoading]);

  return (
    <SocketContext.Provider
      value={{
        socket: socketRef.current,
        onlineUsers,
        conversations,
        setConversations,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
