// frontend/src/hooks/useGetConversations.tsx
import { useEffect, useState } from "react";
import { useSocketContext } from "../context/SocketContext";

const useGetConversations = () => {
  const { socket, conversations, setConversations } = useSocketContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!socket?.connected);

    socket?.on("connect", () => {
      console.log("Socket conectado:", socket.id);
      setLoading(false);

      // Obtener las conversaciones después de la conexión
      socket?.emit("getConversationsRequest"); // Este puede ser un evento que el backend escucha para enviar las conversaciones
    });

    socket?.on("disconnect", () => {
      console.warn("Socket desconectado");
      setLoading(true);
    });

    // Actualiza las conversaciones cuando el servidor emita el evento 'updateConversations'
    socket?.on("updateConversations", (newConversations) => {
      setConversations(newConversations.users); // Suponiendo que `users` contiene las conversaciones actualizadas
    });

    return () => {};
  }, [socket]);

  return { loading, conversations };
};

export default useGetConversations;
