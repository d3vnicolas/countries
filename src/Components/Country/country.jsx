import styled from 'styled-components';

export const Master = styled.section`
    width: 100%;
    height: 100%;
    padding-top: 64px;
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
    min-width: 500px;


    img{
        width: 80%;
        height: 350px;
    }
`;

export const Right = styled.div`
    width: 50%;
    min-width: 500px;
    padding-left: 32px;
`;

export const Infos = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4fr 1fr;
    grid-template-areas: 
        "left right"
        "bottom bottom"
    ;

    div:not(:last-of-type){
        padding: 32px 0 64px 0;
    }

    .left{
        grid-area: left;
        p{
            margin: 4px 0;
        }
    }
    .right{
        grid-area: right;
        p{
            margin: 4px 0;
        }

        .lang:not(:last-of-type)::after{
            content: ", ";
        }
    }
    .bottom{
        grid-area: bottom;

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