import React from "react";

// STYLED-COMPONENTS
import { ChatWindowArea, ChatWindowAreaBody, ChatWindowAreaFooter, ChatWindowAreaHeader } from "../../assets/styles/components/ChatWindow/ChatWindowStyle";

const ChatWindow = () => {
    return (
        <ChatWindowArea>
            <ChatWindowAreaHeader></ChatWindowAreaHeader>
            <ChatWindowAreaBody></ChatWindowAreaBody>
            <ChatWindowAreaFooter></ChatWindowAreaFooter>
        </ChatWindowArea>
    )
};

export default ChatWindow;