"use client";

import clsx from "clsx";
import { EmptyState } from "../components/EmptyState";
import useConversation from "../hooks/useConversation";

const Home = () => {
  const { isOpen } = useConversation();
  return (
    <div
      className={clsx({
        ["lg:pl-80 h-full lg:block hidden"]: true,
        ["block"]: isOpen,
      })}
    >
      <EmptyState />
    </div>
  );
};

export default Home;
