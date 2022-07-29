import styled from "styled-components";
import { theme } from '../../themes/theme'

export const Wrapper = styled.header`

    width: 100%;
    padding: 27px ${theme.padding.width};
    background-color: ${theme.colors.primary.softRed};
    border-radius: ${theme.radius};

    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    align-items: center;

    grid-row-gap: 10px;
    grid-template-areas: 
        'title icon'
        'balance icon';
`;

export const Title = styled.h4`
    grid-area: title;
    width: 100%;
    color: white;
    font-size: ${theme.size.text};
    font-weight: 400;
    line-height: 125%;
`;

export const Balance = styled.p`
    grid-area: balance;
    width: 100%;
    color: white;
    font-size: ${theme.size.title};
    font-weight: 700;
    line-height: 125%;
`;

export const Icon = styled.div`
    grid-area: icon;
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: black;

    :before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: -50%;
        height: 50px;
        width: 50px;
        border: 3px solid white;
        border-radius: 50%;
    }
`;