import styled from "styled-components";

// BACKGROUND PAGE
export const PageContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(to bottom, #279aee 15%, #171c23 10%);
`;

// CHAT APP WINDOW
export const ChatApp = styled.div`
    display: flex;
    height: 90vh;
    width: 85vw;
    background-color: #D2DBDC;
`;

// CHAT APP WINDOW -> SIDEBAR
export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    max-width: 400px;
    border-right: 1px solid green;
    
`;

// CHAT APP WINDOW -> CONTENT
export const ContentApp = styled.div``;