import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

//IMAGES
import WeBot from "../assets/images/wetalk-icon.png";
import AvatarIcon from "../assets/images/avatar-icon.png";
import AvatarIcon2 from "../assets/images/avatar-icon2.png";
import AvatarIcon3 from "../assets/images/avatar-icon3.png";
import AvatarIcon4 from "../assets/images/avatar-icon4.png";
import AvatarIcon5 from "../assets/images/avatar-icon5.png";

const GlobalState = (props) => {
  const [chatList, setChatList] = useState([
    { 
      chatId: 1, 
      person: "WeBot", 
      profilePicture: `${WeBot}`,
      lastMessage: "Olá WeBot"

    },
    {
      chatId: 2,
      person: "Danilo Silvério",
      profilePicture: `${AvatarIcon3}`,
      lastMessage: "Danilo Silverio"
    },
    {
      chatId: 3,
      person: "Eduardo Carver",
      profilePicture: `${AvatarIcon2}`,
      lastMessage: "Eduardo"
    },
    {
      chatId: 4,
      person: "Fernanda Bailey",
      profilePicture: `${AvatarIcon5}`,
      lastMessage: "Fernanda"
    },
    {
      chatId: 5,
      person: "Gilmar Austin ",
      profilePicture: `${AvatarIcon}`,
      lastMessage: "Glimar Austn"
    },
    {
      chatId: 6,
      person: "Higor Zardin",
      profilePicture: `${AvatarIcon4}`,
      lastMessage: "Eu sou Higor"
    },
    {
      chatId: 7,
      person: "Isabelle Young",
      profilePicture: `${AvatarIcon2}`,
      lastMessage: "Eu sou Isabele"
    },
    {
      chatId: 8,
      person: "James Xavier",
      profilePicture: `${AvatarIcon5}`,
      lastMessage: "Eu sou James"
    },
    {
      chatId: 9,
      person: "Karen Willians",
      profilePicture: `${AvatarIcon}`,
      lastMessage: "Eu sou Karfxfsfdsen"
    },
    {
      chatId: 10,
      person: "Lucas Vicent",
      profilePicture: `${AvatarIcon4}`,
      lastMessage: "Eu soukdkfsdjfjsdjfjsdfjsdjfjsd Lucas"
    },
  ]);
  const [activeChat, setActiveChat] = useState([{}]);
  const [emojiPickerDisplay, setEmojiPickerDisplay] = useState(false);
  const [textMessage, setTextMessage] = useState("");
  const [chatMessage, setChatMessage] = useState([
    {
      author: 0,
      message: ""
    }, 
    {
      author: 1,
      lastMessage: "olaasdsadsadasdas"
    },
    {
      author: 2,
      lastMessage: "olaasdsadsadasdas"
    }, 
    {
      author: 3,
      lastMessage: "olaasdsadsadasdas"
    },
    {
      author: 4,
      lastMessage: "olaasdsadsadasdas"
    }, 
    {
      author: 5,
      lastMessage: "olaasdsadsadasdas"
    },
    {
      author: 6,
      lastMessage: "olaasdsadsadasdas"
    }, 
    {
      author: 7,
      lastMessage: "olaasdsadsadasdas"
    },
    {
      author: 8,
      lastMessage: "olaasdsadsadasdas"
    }, 
    {
      author: 9,
      lastMessage: "olaasdsadsadasdas"
    },
    {
      author: 10,
      lastMessage: "olaasdsadsadasdas"
    }, 
  ]);

  const data = {
    chatList,
    activeChat,
    emojiPickerDisplay,
    textMessage,
    chatMessage,
    setChatMessage,
    setTextMessage,
    setEmojiPickerDisplay,
    setChatList,
    setActiveChat
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
