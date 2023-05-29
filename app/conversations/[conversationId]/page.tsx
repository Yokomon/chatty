import { getConversationById } from "@/app/actions/getConversationById";
import { getMessages } from "@/app/actions/getMessages";
import { EmptyState } from "@/app/components/EmptyState";
import { Body } from "./components/Body";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

interface IParams {
  conversationId: string;
}

const Conversations = async ({ params }: { params: IParams }) => {
  const conversations = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId)

  if(!conversations) return (
    <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
            <EmptyState />
        </div>
    </div>
  )
  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversations} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};

export default Conversations;
