import { HiChat } from "react-icons/hi";

export const EmptyState = () => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 flex justify-center items-center bg-gray-100 h-full">
      <div className="flex items-center space-x-4">
        <h3 className="text-xl font-semibold text-gray-900">
          Select a chat or start a new conversation
        </h3>
        <HiChat className="h-7 w-7 text-sky-600 animate-pulse" />
      </div>
    </div>
  );
};
