import React from 'react'
import styled from 'styled-components';
// import { useNavigate } from "react-router-dom";

const Btn = styled.button`
    display: flex;
    align-items: center;

    padding: 6px 22px;

    border: none;
    border-radius: 2px;
    background-color: ${props => props.theme.colors.elements};
    color: ${props => props.theme.colors.text};

    box-shadow: 0 0px 8px rgba(0, 0, 0, .3);

    margin-bottom: 32px;

    cursor: pointer;

    svg{
        margin-right: 6px;
        font-size: 16px;
    }
`;

const NavBtn = (props) => {
    // const navigate = useNavigate();
    return (
        <Btn onClick={ () => window.location.href='/' }>
            {props.icon}
            {props.title}
        </Btn>
    );
}
 
export default NavBtn;