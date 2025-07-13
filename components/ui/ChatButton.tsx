'use client'
import { FaRegCommentDots } from 'react-icons/fa';

export default function ChatButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white p-4 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
      title="Chat with me"
    >
      <FaRegCommentDots size={24} />
    </button>
  );
}
