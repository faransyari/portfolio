"use client";
import ChatButton from "../ui/ChatButton";
import ChatModal from "./ChatModal";
import useChatModal from "../hooks/useChatModal";

export default function ChatLauncher() {
  const chat = useChatModal();
  return (
    <>
      <ChatButton onClick={chat.open} />
      <ChatModal isOpen={chat.isOpen} onClose={chat.close} />
    </>
  );
}
