import React, {useContext} from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

//STYLED-COMPONENTS
import { ChatListMessage, ChatListMessageContent, MessageContent, MessageContentDate, MessageContentLastMsg, MessageContentName } from "../../assets/styles/components/ChatListMessages/ChatListStyle";

// (IMAGES)
import AvatarIcon from "../../assets/images/avatar-icon.png";



const ChatListMessages = () => {
    
    const {chatList} = useContext(GlobalStateContext);

    const chatBox = chatList.map((item, key) => {
        return (
            <ChatListMessage key={key}>
                <img src={AvatarIcon} alt="Avatar Icon" />
                <ChatListMessageContent>
                    <MessageContent>
                        <MessageContentName>Danilo Silvério</MessageContentName>
                        <MessageContentDate>18:00</MessageContentDate>
                    </MessageContent>
                    <MessageContent>
                        <MessageContentLastMsg>
                            <p>Olá, tudo bem?</p>
                        </MessageContentLastMsg>
                    </MessageContent>
                </ChatListMessageContent>
            </ChatListMessage>
        )
    })

    return chatBox
};

export default ChatListMessages;