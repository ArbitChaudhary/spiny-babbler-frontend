import PageWrapper from "../common/components/PageWrapper";
import ChatModule from '../components/chat/chat/Chat';
import Peoples from "../components/chat/peoples/Peoples";
import ChatLayout from "../components/layouts/pages/chat-layout/ChatLayout";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { NextPageWithLayout } from "./page";

const Chat: NextPageWithLayout = () => {
    return (
        <PageWrapper >
            <ChatLayout>
                <Peoples />
                <ChatModule />
            </ChatLayout>
        </PageWrapper>
    );
}


Chat.getLayout = (page) => {
    return (
        <PrimaryLayout>
            {page}
        </PrimaryLayout>
    )
}

export default Chat

