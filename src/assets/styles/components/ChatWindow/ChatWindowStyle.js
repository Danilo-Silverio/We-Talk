import styled from "styled-components";
import { primaryBlue, secondaryBlue, secondaryColor, tertiaryBlue } from "../../../../constants/colors";
import Background from "../../../images/background-chat.jpg";

// 1. CHAT WINDOW AREA----------------------------------------------------------------

export const ChatWindowArea = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

// (1.1 CHAT WINDOW AREA HEADER)
export const ChatWindowAreaHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 6px 0;
    border-bottom: 1px solid ${secondaryColor};
    background-image: linear-gradient(to bottom, ${primaryBlue} 50%, ${secondaryBlue});
`;

export const ChatWindowHeaderInfo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    img{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin:0 20px 0 25px;
    }
    h1{
        font-size: 18px;
        font-weight: 500;
        color: ${secondaryColor};
    }
`;

export const ChatWindowHeaderButtons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        margin-right: 10px;
        border: none;
        border-radius: 50%;
        background-color: transparent;
        cursor: pointer;
        transition: all 0.4s ease;
    }
    button:hover{
        background-color: ${tertiaryBlue};
    }
`;

// (1.2 CHAT WINDOW AREA BODY)
export const ChatWindowAreaBody = styled.div`
    flex: 1;
    background-color: ${secondaryColor};
    background-image: url(${Background});
    background-position: center;
`;

// (1.3 CHAT WINDOW AREA FOOTER)
export const ChatWindowAreaFooter = styled.div`
    display: flex;
    align-items: center;
    height: 65px;
    box-shadow: 0 -3px 15px #b4b7b4;
    background-image: linear-gradient(to bottom, #b4b7b4 5%, #dddeda);
`;

export const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50px;
    background-color: transparent;
    cursor: pointer;
    overflow-x: hidden;
    background-color: red;
`;

export const EmojiButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 25px;
    padding: 5px;
    border: none;
    border-radius: 50px;
    background-color: red;
    cursor: pointer;
`;

export const InputArea = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    input{
        height: 45px;
        width: 95%;
        border: 0;
        outline: 0;
        border-radius: 15px;
        font-size: 15px;
        font-weight: 500;
        padding-left: 30px;
        color: #4A4A4A;
        background-color: ${secondaryColor};
    }
`;

export const SendMessageButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 25px;
    padding: 5px;
    border: none;
    border-radius: 50px;
    background-color: transparent;
    cursor: pointer;
`;

// (1.4 CHAT WINDOW EMOJI AREA)
export const EmojiArea = styled.div`
    overflow-y: hidden;
    transition: all 0.3s ease;
`;