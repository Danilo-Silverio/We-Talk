import React, { useContext }from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

// (STYLED-COMPONENTS)
import { ChatApp, ContentApp, PageContent, Sidebar, SidebarChatList, SidebarHeader, SidebarHeaderButton, SidebarHeaderButtons, SidebarSearch } from "../../assets/styles/pages/Home/HomeStyle";

// (IMAGES)
import AvatarIcon3 from "../../assets/images/avatar-icon3.png";

// (MATERIAL UI)
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

//COMPONENTS
import ChatListMessages from "../../components/ChatListMessages/ChatListMessages";
import StartingChat from "../../components/StartingChat/StartingChat";
import ChatWindow from "../../components/ChatWindow/ChatWindow";


const HomePage = () => {
    
    const {activeChat} = useContext(GlobalStateContext);


    return (
        <PageContent>
            <ChatApp>
                <Sidebar>
                    <SidebarHeader>
                        <img src={AvatarIcon3} alt="Avatar Icon"/>
                        <SidebarHeaderButtons>
                            <SidebarHeaderButton>
                                <DonutLargeIcon style={{color: "#f8fbff"}}/>
                            </SidebarHeaderButton>
                            <SidebarHeaderButton>
                                <ChatIcon style={{color: "#f8fbff"}}/>
                            </SidebarHeaderButton>
                            <SidebarHeaderButton>
                                <MoreVertIcon style={{color: "#f8fbff"}}/>
                            </SidebarHeaderButton>
                        </SidebarHeaderButtons>
                    </SidebarHeader>
                    <SidebarSearch>
                        <div>
                            <SearchIcon style={{color: "#919191"}}/>
                            <input type="search" placeholder="Pesquisar ou começar uma nova conversa" />
                        </div>
                    </SidebarSearch>
                    <SidebarChatList>
                        <ChatListMessages/>
                    </SidebarChatList>
                </Sidebar>
                <ContentApp> 
                    { activeChat.chatId !== undefined && <ChatWindow/> }
                    { activeChat.chatId === undefined && <StartingChat/> }
                </ContentApp>
            </ChatApp>
        </PageContent>
    )
};

export default HomePage;