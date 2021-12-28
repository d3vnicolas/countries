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
            <div className="country"></div>
            <Info>
                <h3>Brasil</h3>
                <p><b>population:</b> 230 milhões</p>
                <p><b>region:</b> america do sul</p>
                <p><b>capital:</b> brasilia</p>
            </Info>
        </Wrapper>
    );
}

export default Card;