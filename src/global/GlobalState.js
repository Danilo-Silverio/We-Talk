import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    
    const [ chatList, setChatList ] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}])

    const data = {chatList};

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

};

export default GlobalState;