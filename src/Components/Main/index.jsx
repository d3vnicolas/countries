import React from 'react';
import styled from 'styled-components';

const Master = styled.main`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.background};
`;

const Search = styled.div`

`;

const Main = () => {
    return (
        <Master>
            <div className="container">
                <Search>
                    <input type="search" />
                    <select name="region">
                        <option value="" selected style={{display: 'none'}}>Filter by Region</option>
                        <option value="valor1">Valor 1</option>
                        <option value="valor2">Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>
                </Search>
            </div>
        </Master>
    );
}

export default Main;