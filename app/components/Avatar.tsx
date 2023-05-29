"use client";

import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";

import { User } from "@prisma/client";
import useActiveList from "../hooks/useActiveList";

interface AvatarProps {
  user?: User;
}

export const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;
  return (
    <div className="relative">
      {!user?.image ? (
        <AiOutlineUser
          size={37}
          className="border-x border-t-[1px] rounded-full"
        />
      ) : (
        <div className="relative inline-block rounded-full overflow-hidden">
          <Image
            alt="avatar"
            src={user?.image}
            height={30}
            width={30}
            className="max-w-[10rem]"
          />
        </div>
      )}
      {isActive && (
        <span className="absolute block rounded-md bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2" />
      )}
    </div>
  );
};
