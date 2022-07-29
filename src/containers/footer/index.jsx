import React from 'react';
import { Title, Total, Amount, Percent, Period } from './styled';

const Footer = () => {
    return (
        <div>
            <Title>Total this month</Title>
            <Total>
                <Amount>$478.33</Amount>
                <Percent>+2.4%</Percent>
                <Period>from last month</Period>
            </Total>
        </div>
    );
}

export default Footer;
