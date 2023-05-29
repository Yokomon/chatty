"use client";

import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons/lib";

interface DesktopItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: (() => Promise<undefined>) | undefined;
  active?: boolean | undefined;
  logoutBtn?: boolean | undefined;
}

export const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
  logoutBtn,
}) => {
  const handleClick = () => {
    if (onClick) return onClick();
  };

  return (
    <li onClick={handleClick}>
      {logoutBtn ? (
        <div
          onClick={handleClick}
          className="hover:text-rose-500 cursor-pointer rounded-md hover:bg-rose-50 p-2"
        >
          <Icon className="h-6 w-6 shrink-0" />
          <span className="sr-only">{label}</span>
        </div>
      ) : (
        <Link
          href={href!}
          className={clsx({
            ["group relative flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-sky-600"]:
              true,
            ["text-sky-600 bg-sky-50"]: active,
          })}
        >
          <Icon className="h-6 w-6 shrink-0" />
          <span className="sr-only"> {label}</span>
        </Link>
      )}
    </li>
  );
};
