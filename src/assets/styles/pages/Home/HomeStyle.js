import styled from "styled-components";
import { primaryBlue, secondaryBlue, secondaryColor, tertiaryBlue } from "../../../../constants/colors";

// 1. BACKGROUND PAGE----------------------------------------------------------------
export const PageContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(to bottom, ${secondaryBlue} 20%, ${secondaryColor} 10%);
`;

// 2. CHAT APP WINDOW----------------------------------------------------------------
export const ChatApp = styled.div`
    display: flex;
    height: 90vh;
    width: 85vw;
    background-color: #eceded;
    box-shadow: 10px 10px 50px rgba(96, 96, 99, 0.664);
`;

// 3. CHAT APP WINDOW -> SIDEBAR----------------------------------------------------------------
export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    max-width: 400px;
    border-right: 2px solid ${tertiaryBlue};
`;

// (3.1 SIDEBAR HEADER)
export const SidebarHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 6px 15px 6px 25px;
    background-image: linear-gradient(to bottom, ${primaryBlue} 50%, ${secondaryBlue});
    img{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        cursor: pointer;
    }
`;

export const SidebarHeaderButtons = styled.div`
    display: flex;
`;

export const SidebarHeaderButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    margin-right: 5px;
    border: none;
    border-radius: 20px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    :hover{
        background-color: ${tertiaryBlue};
    }
`;

// (3.2 SIDEBAR SEARCH)
export const SidebarSearch = styled.div`
    padding: 15px 15px;
    div{
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 20px;
        border-radius: 20px;
        background-color: #fff;
        input{
            flex: 1;
            border: 0;
            outline: 0;
            background-color: transparent;
            margin-left: 10px;            
        }
    }
`;

// (3.3 SIDEBAR CHAT LIST)
export const SidebarChatList = styled.div`
    flex: 1;
    overflow-y: auto;
    background-color: #fff;
    ::-webkit-scrollbar{
        width: 6px;
        height: 6px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 20px;
        background-color: ${primaryBlue};
    }
`;
// 4. CHAT APP WINDOW -> CONTENT----------------------------------------------------------------
export const ContentApp = styled.div`
    width: 75%;
    background-image: linear-gradient( to bottom, ${tertiaryBlue} 10%, ${secondaryColor});
`;