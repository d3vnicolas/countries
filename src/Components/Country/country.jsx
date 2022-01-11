import styled from 'styled-components';

export const Master = styled.section`
    width: 100%;
    height: 100%;
    padding-top: 32px;
    color: ${props => props.theme.colors.text};
`;

export const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const Left = styled.div`
    width: 50%;
    padding-right: 12px;

    @media (max-width: 960px){
        width: 100%;
        padding: 0;
        margin-bottom: 22px;
    }

    img{
        width: 100%;
        min-height: 335px;
        object-fit: cover;

        @media (max-width: 580px){
            min-height: unset;
            max-height: 250px;
        }
    }
`;

export const Right = styled.div`
    width: 50%;

    @media (max-width: 960px){
        width: 100%;
    }

    height: 335px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2{
        margin-bottom: 32px;
    }
`;

export const Infos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .left{
        width: 50%;
        @media (max-width: 1080px){
            width: 100%;
            margin-bottom: 22px;
        }

        p{
            margin: 4px 0;
        }
    }
    .right{
        width: 50%;
        @media (max-width: 1080px){
            width: 100%;
        }

        p{
            margin: 4px 0;
        }

        .lang:not(:last-of-type)::after{
            content: ", ";
        }
    }
    .bottom{
        width: 100%;
        margin-top: 32px;

        @media (max-width: 960px){
            margin-top: 22px;
        }

        .wrapper_borders{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            p{
                margin-right: 12px;
            }

            .borders{
                background-color: ${props => props.theme.colors.elements};
                padding: 0 16px;
                margin: 4px;

                border-radius: 2px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
            }
        }
       
    }
`;