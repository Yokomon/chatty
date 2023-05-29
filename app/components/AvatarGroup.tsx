"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";

interface AvatarGroupProps {
  users: User[];
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ users }) => {
  const slicedUsers = users.slice(0, 3);
  const positionMap = {
    0: "top-0 left-[12px]",
    1: "bottom-0",
    2: "bottom-0 right-0",
  };
  return (
    <div className="relative h-12 w-12">
      {slicedUsers.map((user, idx) => (
        <div
          key={user.id}
          className={`absolute inline-block overflow-hidden rounded-full h-[21px] w-[21px] ${
            positionMap[idx as keyof typeof positionMap]
          }`}
        >
          {user.image ? (
            <Image alt="avatar" src={user.image} fill />
          ) : (
            <AiOutlineUser size={18} />
          )}
        </div>
      ))}
    </div>
  );
};
