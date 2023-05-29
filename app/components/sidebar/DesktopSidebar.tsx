"use client";

import { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";

import { useRoutes } from "@/app/hooks/useRoutes";
import { User } from "@prisma/client";

import { Avatar } from "../Avatar";
import { DesktopItem } from "./DesktopItem";
import { signOut } from "next-auth/react";
import { SettingsModal } from "../SettingsModal";

interface DesktopSidebarProps {
  currentUser: User;
}

export const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  currentUser,
}) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SettingsModal
        isOpen={isOpen}
        currentUser={currentUser}
        onClose={() => setIsOpen(false)}
      />
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
        <nav className="mt-4 flex flex-col justify-between ">
          <ul role={"list"} className="flex flex-col items-center space-y-5">
            {routes.map((route) => (
              <DesktopItem
                label={route.label}
                icon={route.icon}
                href={route.href}
                active={route.active}
                key={route.label}
              />
            ))}
          </ul>
        </nav>
        <nav className="mt-4 flex flex-col justify-between items-center space-y-4">
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:opacity-75 transition"
          >
            <Avatar user={currentUser} />
          </div>
          <ul role={"list"}>
            <DesktopItem
              logoutBtn
              label={"Logout"}
              icon={BiLogOutCircle}
              onClick={() => signOut()}
            />
          </ul>
        </nav>
      </div>
    </>
  );
};
