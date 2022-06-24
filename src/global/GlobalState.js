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
    { chatId: Date.now(), person: "WeBot", profilePicture: `${WeBot}` },
    {
      chatId: Date.now(),
      person: "Danilo Silvério",
      profilePicture: `${AvatarIcon3}`,
    },
    {
      chatId: Date.now(),
      person: "Eduardo Carver",
      profilePicture: `${AvatarIcon2}`,
    },
    {
      chatId: Date.now(),
      person: "Fernanda Bailey",
      profilePicture: `${AvatarIcon5}`,
    },
    {
      chatId: Date.now(),
      person: "Gilmar Austin ",
      profilePicture: `${AvatarIcon}`,
    },
    {
      chatId: Date.now(),
      person: "Higor Zardin",
      profilePicture: `${AvatarIcon4}`,
    },
    {
      chatId: Date.now(),
      person: "Isabelle Young",
      profilePicture: `${AvatarIcon2}`,
    },
    {
      chatId: Date.now(),
      person: "James Xavier",
      profilePicture: `${AvatarIcon5}`,
    },
    {
      chatId: Date.now(),
      person: "Karen Willians",
      profilePicture: `${AvatarIcon}`,
    },
    {
      chatId: Date.now(),
      person: "Lucas Vicent",
      profilePicture: `${AvatarIcon4}`,
    },
  ]);
  const [activeChat, setActiveChat] = useState([{}]);
  const [emojiPickerDisplay, setEmojiPickerDisplay] = useState(false);
  const [textMessage, setTextMessage] = useState("");
  const [chatMessage, setChatMessage] = useState([{}, {}]);

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
