import React from 'react'

import styled from 'styled-components';

import { BsMoon } from 'react-icons/bs';

const Head = styled.header`
    grid: header;

    width: 100%;
    height: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 1);
    background-color: ${props => props.theme.colors.elements};
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    color: ${props => props.theme.colors.text};

    h1{
        font-size: 26px;
        font-weight: 800;
    }

    div{
        cursor: pointer;
        font-weight: bold;

        display: flex;
        align-items: center;

        p{
            font-size: 14px;
            font-weight: 600;

            margin-left: 8px;
        }
    }
`;

const Header = () => {
    return (
        <Head>
            <div className="container">
                <Wrapper>
                    <h1>
                        Where in the world?
                    </h1>
                    <div>
                        <BsMoon />
                        <p>
                            Dark Mode
                        </p>
                    </div>
                </Wrapper>
            </div>
        </Head>
    );
}

export default Header;