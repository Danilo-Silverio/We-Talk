import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

//STYLED-COMPONENTS
import { MessageBox, MessageContent, MessageDate, MessageText } from "../../assets/styles/components/Messages/MessagesStyle";


const Messages = () => {
    
    const {chatMessage} = useContext(GlobalStateContext);
    
    const chat = chatMessage.map((key, item) => {
        return(
            <MessageBox key={key}>
                <MessageContent>
                    <MessageText>ddddaaaddddaaaaaaaaaaasdasdsaddddaaaaaaaaaaasdasdsaddddaaaaaaaaaaasdasdsaddddaaaaaaaaaaasdasdsaddddaaaaaaaaaaasdasdsaddddaaaaaaaaaaasdasdsaddddaaaaaaaaaaasdasdsaddddaaaaaaaaaaasdasdsaddddaaaaaaaaaaasdasdsaddddaaaaaaaaaaasdasdsaddddaaaaaaaaaaasdasdsaaaaaaaaasdasdsa</MessageText>
                    <MessageDate>19:00</MessageDate>
                </MessageContent>
            </MessageBox>
        )
    });

    return chat
};

export default Messages;