import React from 'react';
import { Wrapper, Title, Diagram, Item, Column, Label } from './styled';
import Footer from '../footer';
import data from '../../data/data.json'

const Main = () => {

    console.log(data);

    const arr = Array.from({length: data.length})

    data.forEach((d, i) => arr[i] = d.amount)

    const max = Math.max(...arr)

    return (
        <Wrapper>
            <Title>
                Spending - Last 7 days
            </Title>
            <Diagram>
                {data.map(d => 
                    <Item key={d.day}>
                        <Column amount={d.amount} max={max} style={{}}/>
                        <Label>
                            {d.day}
                        </Label>
                    </Item>
                )}
            </Diagram>
            <hr style={{marginBottom: '5px'}}/>
            <Footer />
        </Wrapper>
    );
}

export default Main;
