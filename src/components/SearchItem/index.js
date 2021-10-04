import React from 'react';
import { Container, Banner, Title, RateContainer, Rate } from './styles';
import { Ionicons } from '@expo/vector-icons';

function SearchItem({ data, navigatePage }) {
    function detailMovie() {
        if(data.release_date === '') {
            alert('movie without a release date');
            return;
        }
        navigatePage(data);
    };

    return (
        <Container activeOpacity={0.7} onPress={navigatePage}>
            { data?.poster_path ? (
                <Banner 
                    resizeMethod="resize"
                    source={{
                        uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}`
                    }}
                />
            ) : (
                <Banner 
                    source={require('../../assets/images/semfoto.png')}
                /> 
            ) }
            <Title>{data?.title}</Title>
            <RateContainer>
                <Ionicons 
                    name="md-star"
                    size={12}
                    color="#E7A74E"
                />
                <Rate>{data?.vote_average}/10</Rate>
            </RateContainer>
        </Container>
    );
};

export default SearchItem;