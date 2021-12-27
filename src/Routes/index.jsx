import React from 'react';
import styled from 'styled-components';
import Main from '../Components/Main';

const Rota = styled.div`
    grid-area: main;
    width: 100%;
`;

const Route = () => {
    return (
        <Rota>
            <Main />
        </Rota>
    );
}

export default Route;