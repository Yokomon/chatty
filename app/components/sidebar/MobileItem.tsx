"use client";

import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons/lib";

interface MobileItemProps {
  href: string;
  icon: IconType;
  active: boolean | undefined;
}

export const MobileItem: React.FC<MobileItemProps> = ({
  href,
  icon: Icon,
  active,
}) => {
  return (
    <Link
      href={href}
      className={clsx({
        ["group flex gap-x-3 text-sm leading-6 border-x-[.5px] font-semibold w-full justify-center p-3 text-gray-500"]:
          true,
        ["text-sky-600"]: active,
      })}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};
