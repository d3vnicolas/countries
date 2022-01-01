import React from 'react'
import Main from '../Components/Main';
import Country from '../Components/Country';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const Rota = styled.div`
    grid-area: main;
    width: 100%;
    height: 100%;
`;

const Rotas = () => {
    return (
        <Rota>
            <Router>
                <Switch>
                    <Route path="/" element={<Main />} />
                    <Route path="/country/:name" element={ <Country /> }/>
                </Switch>
            </Router>
        </Rota>
    );
}

export default Rotas;