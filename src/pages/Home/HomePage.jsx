import React from "react";

// (STYLED-COMPONENTS)
import { ChatApp, ContentApp, PageContent, Sidebar, SidebarChatList, SidebarHeader, SidebarHeaderButton, SidebarHeaderButtons, SidebarSearch } from "../../assets/styles/pages/Home/HomeStyle";

// (IMAGES)
import AvatarIcon from "../../assets/images/avatar-icon.png";

// (MATERIAL UI)
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

//COMPONENTS
import ChatListMessages from "../../components/ChatListMessages/ChatListMessages";

const HomePage = () => {
    
    return (
        <PageContent>
            <ChatApp>
                <Sidebar>
                    <SidebarHeader>
                        <img src={AvatarIcon} alt="Avatar Icon"/>
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
                <ContentApp>...</ContentApp>
            </ChatApp>
        </PageContent>
    )
};

export default HomePage;