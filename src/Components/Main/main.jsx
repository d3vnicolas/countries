import styled from "styled-components";

export const Master = styled.main`
    width: 100%;
    padding: 57px 0;
    

    .input{
        background-color: ${props => props.theme.colors.input};
        border: none;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
        color: ${props => props.theme.colors.text};
        font-size: 16px;
        outline: none;
    }
`;

export const Search = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    select{
        @media (max-width: 680px){
            width: 100%;
            max-width: 200px;
            text-align: center;
        }
        width: 160px;
        padding: 12px;

    }
`;

export const Input = styled.div`
    width: 400px;
    position: relative;
    margin-right: 22px;

    @media (max-width: 680px){
        width: 100%;
        margin: 0 0 22px 0;
    }

    svg{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 16px;
        fill: ${props => props.theme.colors.text};
    }

    input{
        width: 100%;
        padding: 12px 0 12px 40px;
    }
`;

export const Cards = styled.section`
    width: 100%;
    padding: 40px 0;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 22px;
`

export const Message = styled.div`
    width: 100%;
    padding: 60px 0;
    text-align: center;

    p{
        font-size: 32px;
        color: ${props => props.theme.colors.text};
    }
`;