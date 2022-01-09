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
        margin-bottom: 12px;
    }
`;

export const Search = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    select{
        padding: 12px;
    }
`;

export const Input = styled.div`
    width: 400px;
    position: relative;
    margin-right: 22px;

    svg{
        position: absolute;
        top: calc(50% - 6px);
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
    gap: 12px;
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