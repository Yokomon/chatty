"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";

import { useOtherUser } from "@/app/hooks/useOtherUser";
import { FullConversationType } from "@/app/types";
import { Avatar } from "@/app/components/Avatar";
import { AvatarGroup } from "@/app/components/AvatarGroup";
import { User } from "@prisma/client";

interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected,
}) => {
  const otherUser = useOtherUser(data);
  const session = useSession();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [router, data.id]);

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);

  const userEmail = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) return false;

    const seenArray = lastMessage.seen || [];

    if (!userEmail) return false;

    return seenArray.filter((user) => user.email === userEmail).length !== 0;
  }, [lastMessage, userEmail]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return `Sent an image`;
    }
    if (lastMessage?.body) {
      return lastMessage.body;
    }

    return "Start a conversation";
  }, [lastMessage]);

  return (
    <div
      onClick={handleClick}
      className={clsx({
        ["w-full relative flex items-center space-x-4 hover:bg-neutral-100 rounded-lg transition bg-white p-3 cursor-pointer"]:
          true,
        ["!bg-neutral-100"]: selected,
      })}
    >
      {data.isGroup ? (
        <AvatarGroup users={data.users} />
      ) : (
        <Avatar user={otherUser} />
      )}
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none relative">
          <div className="flex justify-between items-center mb-1">
            <p className="font-medium text-base text-gray-900">
              {data.name || otherUser.name}
            </p>
            {lastMessage?.createdAt && (
              <p className="font-light text-gray-400 text-[11px]">
                {format(new Date(lastMessage.createdAt), "p")}
              </p>
            )}
          </div>
          <p
            className={clsx({
              ["truncate text-sm text-black font-medium"]: true,
              ["text-gray-400"]: hasSeen,
            })}
          >
            {lastMessageText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationBox;
