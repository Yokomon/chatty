import prisma from "@/app/lib/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export const getConversationById = async (id: string) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser?.email) return null;

    const conversation = await prisma.conversation.findUnique({
      where: {
        id,
      },
      include: {
        users: true,
      },
    });

    return conversation;
  } catch (error) {
    return null;
  }
};
