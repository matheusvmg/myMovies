import React from "react";
import { Container, 
    Title, 
    RateContainer, 
    Rate, 
    ActionContainer, 
    DetailButton, 
    DeleteButton, 
    ButtonLabel,
    ContentArea,
    Banner,
    Description
} from './styles';
import { Ionicons, Feather } from '@expo/vector-icons';

function FavoriteItem({ data, deleteMovie, navigatePage }) {
    return (
        <Container>
            <Title>{data?.title}</Title>
            <ContentArea>
                <Banner 
                    source={{
                        uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}`
                    }}
                />
                <Description>{data?.overview}</Description>
            </ContentArea>
            <RateContainer>
                <Ionicons name="md-star" color="#E7A74E" size={12} />
                <Rate>{data?.vote_average}/10</Rate>
            </RateContainer>
            <ActionContainer>
                <DetailButton onPress={() => navigatePage(data)}>
                    <ButtonLabel>See Details</ButtonLabel>
                </DetailButton>
                <DeleteButton onPress={() => deleteMovie(data.id)}>
                    <Feather name="trash" color="#384058" size={24} />
                </DeleteButton>
            </ActionContainer>
        </Container>
    );
};

export default FavoriteItem;