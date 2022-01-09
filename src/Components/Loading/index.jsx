import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Load = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const loadDots = keyframes`
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(.5);
    }
`;

const Dots = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;

    li{
        width: 32px;
        height: 32px;
        border-radius: 32px;
        margin: 0 12px;
        background-color: ${props => props.theme.colors.elements};
        box-shadow: 0px 2px 4px rgba(0, 0, 0, .2);
        
        &:nth-child(1){
            animation: ${loadDots} infinite ease 900ms alternate;
            animation-delay: 300ms;
        }
        &:nth-child(2){
            animation: ${loadDots} infinite ease 900ms alternate;
            animation-delay: 600ms;
        }
        &:nth-child(3){
            animation: ${loadDots} infinite ease 900ms alternate;
            animation-delay: 900ms;
        }
    }
`;


const Loading = () => {
    return (
        <Load>
            <Dots>
                <li></li>
                <li></li>
                <li></li>
            </Dots>
        </Load>
    );
}
 
export default Loading;