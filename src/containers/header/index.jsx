import React from 'react';
import { Wrapper, Title, Balance, Icon } from './styled';

const Header = () => {
    return (
        <Wrapper>
            <Title>My balance</Title>
            <Balance>$921.48</Balance>
            <Icon />
        </Wrapper>
    );
}

export default Header;
