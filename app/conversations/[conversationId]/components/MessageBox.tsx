"use client";

import { useState } from "react";
import clsx from "clsx";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";

import { Avatar } from "@/app/components/Avatar";
import { FullMessageType } from "@/app/types";
import { ImageModal } from "./ImageModal";

interface MessageBoxProps {
  data: FullMessageType;
  isLast: boolean;
}

export const MessageBox: React.FC<MessageBoxProps> = ({ isLast, data }) => {
  const session = useSession();
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const isOwn = session?.data?.user?.email === data?.sender?.email;

  const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(", ");

  const container = clsx({
    ["flex gap-3 p-4"]: true,
    ["justify-end"]: isOwn,
  });

  const avatar = clsx({
    ["order-2"]: isOwn,
  });

  const body = clsx({
    ["flex flex-col gap-2"]: true,
    ["items-end"]: isOwn,
  });

  const message = clsx({
    ["text-sm overflow-hidden bg-gray-100 rounded-md py-2 px-3"]: true,
    ["bg-sky-500 ml-[2rem] lg:ml-[20rem] text-white"]: isOwn,
    ["mr-[2rem] lg:mr-[20rem]"]: !isOwn,
    ["!p-0"]: data?.image,
  });

  return (
    <div className={container}>
      <div className={avatar}>
        <Avatar user={data.sender} />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-500">{data.sender.name}</div>
          <div className="text-[10px] text-gray-400">
            {format(new Date(data.createdAt), "p")}
          </div>
        </div>
        <div className={message}>
          <ImageModal
            src={data.image}
            isOpen={imageModalOpen}
            onClose={() => setImageModalOpen(false)}
          />
          {data.image ? (
            <Image
              onClick={() => setImageModalOpen(true)}
              alt="image"
              height={200}
              width={200}
              src={data.image}
              className="object-cover cursor-pointer duration-500 hover:scale-110 transition"
            />
          ) : (
            data.body
          )}
        </div>
        {isOwn && seenList.length > 0 && (
          <div className="text-xs font-light text-gray-500">
            {`Seen by ${seenList}`}
          </div>
        )}
      </div>
    </div>
  );
};
