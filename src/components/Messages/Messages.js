import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

//STYLED-COMPONENTS
import { MessageBox, MessageContent, MessageDate, MessageText } from "../../assets/styles/components/Messages/MessagesStyle";


const Messages = () => {
    
    const {chatList, chatMessage, activeChat} = useContext(GlobalStateContext);
    
    console.log(activeChat)
    console.log(chatList)
    console.log(chatMessage)

    return(    
        <MessageBox>            
            <MessageContent>
                <MessageText>{activeChat.lastMessage}</MessageText>
                <MessageDate>19:00</MessageDate>
            </MessageContent>
        </MessageBox>
    )
};

export default Messages;