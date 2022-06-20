import styled from "styled-components";
import { primaryBlue, secondaryBlue, secondaryColor } from "../../../constants/colors";

// BACKGROUND PAGE----------------------------------------------------------------
export const PageContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(to bottom, ${secondaryBlue} 15%, ${secondaryColor} 10%);
`;

// CHAT APP WINDOW----------------------------------------------------------------
export const ChatApp = styled.div`
    display: flex;
    height: 90vh;
    width: 85vw;
    background-color: #eceded;
`;

// CHAT APP WINDOW -> SIDEBAR----------------------------------------------------------------
export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    max-width: 400px;
    border-right: 1px solid green;
`;

// (SIDEBAR HEADER)
export const SidebarHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 10px 15px 0 15px;
    background-color: ${primaryBlue};
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
`;

// (SIDEBAR SEARCH)
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
// CHAT APP WINDOW -> CONTENT----------------------------------------------------------------
export const ContentApp = styled.div``;