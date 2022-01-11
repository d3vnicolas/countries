import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
    width: 250px;
    @media (max-width: 580px){
        width: 80%;
        max-width: 300px;
    }
    background-color: ${props => props.theme.colors.elements};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, .2);
    border-radius: 4px;
    margin: 0 auto 32px auto;
    overflow: hidden;
    transition: transform 300ms ease;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
    }

    a{
        text-decoration: none;
    }

    img{
        width: 100%;
        height: 150px;
        @media (max-width: 580px){
            height: 170px;
        }
        
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
            <NavLink to={`/${props.name}`}>
                <img src={props.flag} alt={`flag of ${props.name}`} />
                <Info>
                    <h3> {props.name} </h3>
                    <p><b>population:</b> {(props.population).toLocaleString('pt-BR')} </p>
                    <p><b>region:</b> {props.region} </p>
                    <p><b>capital:</b> {props.capital} </p>
                </Info>
            </NavLink>
        </Wrapper>
    );
}

export default Card;