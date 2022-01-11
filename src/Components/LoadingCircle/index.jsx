import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';


const Load = styled.div`
    margin: 32px auto 0 256px;
    width: ${props => props.scale};
    height: ${props => props.scale};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Rotate = keyframes`
    0%{
        transform: rotateZ(0deg);
    }
    100%{
        transform: rotateZ(360deg);
    }
`;

const Circle = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid ${props => props.theme.colors.input};
    border-top-color: ${props => props.theme.colors.elementsVar};
    animation: ${Rotate} infinite 1s linear;
`;


const Loading = (props) => {
    return (
        <Load scale={props.scale}>
            <Circle />
        </Load>
    );
}
 
export default Loading;