import styled from "styled-components";
import { secondaryColor } from "../../../../constants/colors";


// 1. MESSAGES----------------------------------------------------------------

export const MessageBox = styled.div`
    display: flex;
    width: 500px;
    margin: 20px 0 0 10px;
    background-color: red;
`;

export const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    overflow-wrap: break-word;
    background-color: #fff;
`;

export const MessageText = styled.p`
   font-size: 14px;
   margin: 5px 40px 5px 5px;
`;

export const MessageDate = styled.p`
    height: 15px;
    text-align: right;
    font-size: 11px;
    margin: 0 5px 0 0;
    color: #999;
`;