"use client";

import { useMemo, useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { HiEllipsisHorizontal } from "react-icons/hi2";

import { Avatar } from "@/app/components/Avatar";
import { useOtherUser } from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { ProfileDrawer } from "./ProfileDrawer";
import { AvatarGroup } from "@/app/components/AvatarGroup";
import useActiveList from "@/app/hooks/useActiveList";

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

export const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { members } = useActiveList();
  const isActive = members.indexOf(otherUser?.email!) !== -1;

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }
    return isActive ? "Online" : "Offline";
  }, [conversation, isActive]);

  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div className="flex bg-white w-full border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
        <div className="flex gap-3 items-center">
          <Link
            href="/conversations"
            className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer"
          >
            <HiChevronLeft size={32} />
          </Link>
          {conversation.isGroup ? (
            <AvatarGroup users={conversation.users} />
          ) : (
            <Avatar user={otherUser} />
          )}{" "}
          <div className="flex flex-col">
            <h4 className="font-medium">
              {conversation.name || otherUser.name}
            </h4>
            <div className="text-xs font-normal text-gray-500 ">
              {statusText}
            </div>
          </div>
        </div>
        <div
          className="bg-sky-50/60 p-2 hover:bg-sky-50 rounded-full"
          onClick={() => setDrawerOpen(true)}
        >
          <HiEllipsisHorizontal
            className="text-sky-500 rounded-full cursor-pointer transition hover:text-sky-600"
            size={25}
          />
        </div>
      </div>
    </>
  );
};
