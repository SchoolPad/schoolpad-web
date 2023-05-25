import styled from "styled-components";
import { v } from "../../../../styles/variables";
import { Link } from "react-router-dom";

export const NavBar = styled.ul`
 margin:0;
 padding:0 0px 0 20px;
 list-style:none;
 display:flex;
 align-items:center;
`;

export const NavBarItem = styled.li`
    padding:0px 10px;
>a{
    text-decoration:none;
    height:55px;
    display:flex;
    align-items:center;
}
>a.active{
    border-bottom:2px solid #0065FF;
    >span{
        color:${({theme}) => theme.bgPrimary};
    }
}
>.more-drop{
    >button{
        height:32px;
        border-radius:3px;
        display:flex;
        align-items:center;
        background: ${({theme}) => theme.bgPrimary};
    }
}

`;

export const LinkTitle = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 32px;
    color:#091E42;
`;

export const InactiveIcon = styled.img``;

export const ActiveIcon = styled.img``;

export const IconContainer = styled.div``;

export const OnlyIcon = styled.img``;

