import React from 'react';
import { FaRegMoon } from 'react-icons/fa';
import styled from 'styled-components';

const Head = styled.header`
    grid-area: header;
    width: 100%;
    background-color: ${props => props.theme.colors.elements};
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.text};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, .2);
`;
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1{
        font-weight: 800;
        font-size: 26px;
    }

    div{
        font-weight: 800;
        font-size: 14px;

        display: flex;
        align-items: center;

        cursor: pointer;

        svg{
            margin-right: 8px;
        }
    }
`;

const Header = () => {
    return (
        <Head>
            <div className="container">
                <Wrapper>
                    <h1>Where in the world?</h1>
                    <div>
                        <FaRegMoon /> Dark Mode
                    </div>
                </Wrapper>
            </div>
        </Head>
    );
}
 
export default Header;