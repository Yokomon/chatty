import { getConversations } from "@/app/actions/getConversations";
import { getCurrentUser } from "@/app/actions/getCurrentUser";

import { ActiveStatus } from "../ActiveStatus";
import { DesktopSidebar } from "./DesktopSidebar";
import { MobileFooter } from "./MobileFooter";

export const Sidebar = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  const conversations = await getConversations();

  return (
    <div className="h-full">
      <ActiveStatus />
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};
