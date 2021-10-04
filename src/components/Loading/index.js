import React from 'react';
import { Container } from './styles';
import { ActivityIndicator } from 'react-native';

function Loading() {
    return (
        <Container>
            <ActivityIndicator
                color="#191A30"
                size="large"
            />
        </Container>
    );
};

export default Loading;