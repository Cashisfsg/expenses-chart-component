import styled from "styled-components";
import { theme } from '../../themes/theme';

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${theme.padding.height} ${theme.padding.width} 50px;
    gap: 30px;
    background-color: rgb(255, 252, 247);
    border-radius: ${theme.radius};
`;

export const Title = styled.h1`
    font-size: ${theme.size.title};
    line-height: 125%;
    font-weight: 900;
    margin-bottom: 15px;
`;

export const Diagram = styled.ul`
    display: flex;
    height: 200px;
    justify-content: space-between;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    list-style-type: none;
`;

export const Column = styled.div`
    position: relative;
    width: 50px;
    height: ${({ max, amount }) => `calc(150px / ${max} * ${amount})` || null};
    margin-bottom: 8px;
    border-radius: 5px;
    background-color: ${theme.colors.primary.softRed};
    cursor: pointer;
    transition: all .3s linear; 

    :before {
        content: '${({ amount }) => `$${amount}` || null}';
        opacity: 0;
        position: absolute;
        box-sizing: border-box;
        background-color: black;
        max-width: 75px;
        border-radius: 5px;
        padding: 9px 9px;
        top: 0;
        left: 50%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transform: translate(-50%, calc(-100% - 8px));
        color: white;
        font-size: 17px;
        font-weight: 700;
        transition: all .2s linear; 
    }

    :hover {
        background-color: ${theme.colors.primary.cyan};
    }

    :active {
        transition: all .1s linear; 
        background-color: rgb(255, 155, 135);
    }

    :hover::before {
        opacity: 1;
    }

`;

export const Label = styled.label`
    font-size: 16px;
    font-weight: 700;
    color: rgb(188, 181, 175);
`;