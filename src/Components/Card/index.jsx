import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 250px;
    background-color: ${props => props.theme.colors.elements};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, .2);
    border-radius: 4px;
    margin-bottom: 80px;

    .country{
        width: 100%;
        height: 150px;
        background-color: chartreuse;
    }
`;

const Info = styled.div`
    color: ${props => props.theme.colors.text};
    padding: 28px 12px;

    p{
        font-weight: 300;

        b{
            font-weight: 600;
        }
    }

    h3{
        margin-bottom: 8px;
    }
`;

const Card = (props) => {
    return (
        <Wrapper>
            <img src={props.flag} width="250" height="150"/>
            <Info>
                <h3> {props.name} </h3>
                <p><b>population:</b> {props.population} </p>
                <p><b>region:</b> {props.region} </p>
                <p><b>capital:</b> {props.capital} </p>
            </Info>
        </Wrapper>
    );
}

export default Card;