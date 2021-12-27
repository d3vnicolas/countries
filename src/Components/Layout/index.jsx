import React from 'react';
import styled from 'styled-components';
import Rotas from '../../Routes';
import Header from '../Header';

const Template = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64px 1fr;
    grid-template-areas:
        "header"
        "main"
    ;
`;

const Grid = () => {
    return (
        <Template>
            <Header />
            <Rotas />
        </Template>
    );
}
 
export default Grid;