import styled from "styled-components";
import {StyledIconBase} from "@styled-icons/styled-icon"

export const Main = styled.main`
    position: relative;
`

export const AccessDenied = styled.div`
    position: absolute;
    width: 450px;
    top: 150px;
    left: 0;
    right: 0;
    margin-left: auto; 
    margin-right: auto;
    color: #B00720;
    background-color: #FFE5E5;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 16px;    
    height: 65px;
    border-radius: 8px;    
    ${StyledIconBase}{
        width: 40px;
        margin-right: 10px;
    }
`