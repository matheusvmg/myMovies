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
import { useThemeContext } from '../../contexts/ThemeContext';

function FavoriteItem({ data, deleteMovie, navigatePage }) {
    const { applicationTheme } = useThemeContext();

    return (
        <Container>
            <Title theme={applicationTheme}>{data?.title}</Title>
            <ContentArea>
                <Banner 
                    source={{
                        uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}`
                    }}
                />
                <Description theme={applicationTheme}>{data?.overview}</Description>
            </ContentArea>
            <RateContainer>
                <Ionicons name="md-star" color="#E7A74E" size={12} />
                <Rate theme={applicationTheme}>{data?.vote_average}/10</Rate>
            </RateContainer>
            <ActionContainer>
                <DetailButton theme={applicationTheme} onPress={() => navigatePage(data)}>
                    <ButtonLabel theme={applicationTheme}>See Details</ButtonLabel>
                </DetailButton>
                <DeleteButton onPress={() => deleteMovie(data.id)}>
                    <Feather name="trash" color={applicationTheme === 'light' ? '#384058' : '#EFEFEF'} size={24} />
                </DeleteButton>
            </ActionContainer>
        </Container>
    );
};

export default FavoriteItem;