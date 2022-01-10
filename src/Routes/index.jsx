import React, { useEffect } from 'react'
import Main from '../Components/Main';
import Country from '../Components/Country';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobal } from '../Context/global';
import countries from '../API/country';

const Rota = styled.div`
    grid-area: main;
    width: 100%;
    height: 100%;
`;

const Rotas = () => {

    const { setAll } = useGlobal();

    const fetchData = async () => {
        const response = await countries.all();
        setAll(response);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Rota>
            <Router>
                <Switch>
                    <Route path="/" element={<Main />} />
                    <Route path="/country/:name" element={<Country />} />
                </Switch>
            </Router>
        </Rota>
    );
}

export default Rotas;