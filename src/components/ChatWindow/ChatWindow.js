import React, { useContext } from "react";
import EmojiPicker from "emoji-picker-react";
import GlobalStateContext from "../../global/GlobalStateContext";

// (STYLED-COMPONENTS)
import { ChatWindowArea, ChatWindowAreaBody, ChatWindowAreaFooter, ChatWindowAreaHeader, ChatWindowHeaderButtons, ChatWindowHeaderInfo, EmojiArea, CloseButton, EmojiButton, SendMessageButton, InputArea } from "../../assets/styles/components/ChatWindow/ChatWindowStyle";
import "../../assets/styles/components/ChatWindow/emoji.css"

// (IMAGES)
import Avatar from "../../assets/images/avatar-icon.png";

// (MATERIAL UI)
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const ChatWindow = () => {
    
    const { emojiPickerDisplay, setEmojiPickerDisplay } = useContext(GlobalStateContext);

    const handleEmojiClick = () => {};
    
    return (
        <ChatWindowArea>
            <ChatWindowAreaHeader>
                <ChatWindowHeaderInfo>
                    <img src={Avatar} alt="Avatar Icon" />
                    <h1>Nome</h1>
                </ChatWindowHeaderInfo>
                <ChatWindowHeaderButtons>
                    <button>
                        <SearchIcon style={{color: "#f8fbff"}}/>
                    </button>
                    <button>
                        <AttachFileIcon style={{color: "#f8fbff"}}/>
                    </button>
                    <button>
                        <MoreVertIcon style={{color: "#f8fbff"}}/>
                    </button>
                </ChatWindowHeaderButtons>
            </ChatWindowAreaHeader>
            <ChatWindowAreaBody></ChatWindowAreaBody>
            <EmojiArea style={{height: emojiPickerDisplay ? "280px" : "0px"}}>
                <EmojiPicker
                    disableSearchBar
                    onEmojiClick={handleEmojiClick}
                />
            </EmojiArea>
            <ChatWindowAreaFooter>
                <CloseButton onClick={() => setEmojiPickerDisplay(false)}>
                    <CloseIcon fontSize="large" style={{color: "#5e7aff", width: emojiPickerDisplay ? "40px" : "0px"}}/>
                </CloseButton>
                <EmojiButton onClick={() => setEmojiPickerDisplay(true)}>
                    <AddReactionIcon fontSize="large" style={{color: "#5e7aff"}}/>
                </EmojiButton>
                    <InputArea>
                        <input type="text" placeholder="Escreva uma mensagem"/>
                    </InputArea>
                <SendMessageButton>
                    <SendIcon fontSize="large" style={{color: "#5e7aff"}}/>
                </SendMessageButton>
            </ChatWindowAreaFooter>
        </ChatWindowArea>
    )
};

export default ChatWindow;