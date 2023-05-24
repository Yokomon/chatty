"use client";

import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons/lib";

interface DesktopItemProps {
  label: string;
  icon: IconType;
  href: string;
  onClick: (() => Promise<undefined>) | undefined;
  active: boolean | undefined;
}

export const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) return onClick();
  };

  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx({
          ["group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500"]:
            true,
          ["text-sky-600"]: active,
        })}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only"> {label}</span>
      </Link>
    </li>
  );
};
