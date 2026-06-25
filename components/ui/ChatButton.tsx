'use client'
import { FaRegCommentDots } from 'react-icons/fa';

export default function ChatButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-110"
      title="Chat with me"
    >
      <FaRegCommentDots size={22} />
    </button>
  );
}
