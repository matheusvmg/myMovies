import React from 'react';
import { Container, Name } from './styles';

function Genres({ data }) {
    return (
        <Container>
            <Name>{data.item.name}</Name>
        </Container>
    );
};

export default Genres;