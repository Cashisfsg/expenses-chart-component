import styled from "styled-components";
import { theme } from '../../themes/theme';

export const Title = styled.h5`
    font-size: ${theme.size.text};
    color: rgb(188, 181, 175);
    font-weight: 700;
    line-height: 125%;
    margin-bottom: 8px;
`;

export const Total = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: 
        'amount percent'
        'amount period';

    align-items: center;
`;

export const Amount = styled.h3`
    grid-area: amount;
    font-size: 48px;
    font-weight: 900;
    line-height: 100%;
`;

export const Percent = styled.p`
    grid-area: percent;
    font-size: ${theme.size.text};
    font-weight: 900;
    justify-self: end;
    line-height: 100%;
`;

export const Period = styled.p`
    grid-area: period;
    font-size: ${theme.size.text};
    font-weight: 700;
    color: rgb(188, 181, 175);
    justify-self: end;
`;