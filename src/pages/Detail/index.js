import React, { useState, useEffect } from 'react';
import { 
    Container, 
    Header, 
    HeaderButton, 
    Banner, 
    ButtonLink, 
    Title, 
    ContentArea, 
    Rate,
    ListGenres,
    Description,
    TitleContainer,
    ShareButton
} from './styles';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import api, { key } from '../../services/api';
import Stars from 'react-native-stars';
import Genres from '../../components/Genres';
import { ScrollView, Modal, Share } from 'react-native';
import ModalLink from '../../components/ModalLink';
import { saveMovie, hasMovie, deleteMovie } from '../../utils/storage';
import { useThemeContext } from '../../contexts/ThemeContext';

function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState({});
    const [openLink, setOpenLink] = useState(false);
    const [favoritedMovie, setFavoritedMovie] = useState(false);
    const { applicationTheme } = useThemeContext();

    useEffect(() => {
        let isActive = true;

        async function getMovie() {
            try {
                const response = await api.get(`/movie/${route.params?.id}`, {
                    params: {
                        api_key: key,
                        page: 1
                    }
                });

                if(isActive) {
                    setMovie(response.data);
                    const isFavorite = await hasMovie(response.data);
                    setFavoritedMovie(isFavorite);
                }
            } catch(err) {
                console.log(err);
            }
        };

        if(isActive) {
            getMovie();
        }

        return () => {
            isActive = false;
        }
    }, []);

    async function handlefavoriteMovie(movie) {
        if(favoritedMovie) {
            await deleteMovie(movie.id);
            setFavoritedMovie(false);
            return;
        }
        await saveMovie('@myMovies', movie);
        setFavoritedMovie(true);
    };

    async function onShare() {
        try {
            await Share.share({
                url: movie?.homepage,
                message: `Look this incredible movie called ${movie.title}, their rate is ${movie.vote_average}/10`,
            });
        } catch (err) {
            console.log(err);
            alert('Ocorreu um problema ao compartilhar');
        }
    };

    return (
        <Container theme={applicationTheme}>
            <Header>
                <HeaderButton activeOpacity={0.7} onPress={() => navigation.goBack()} >
                    <Feather 
                        name="arrow-left"
                        size={28}
                        color="#FFFFFF"
                    />
                </HeaderButton>
                <HeaderButton onPress={() => handlefavoriteMovie(movie)}>
                    <Ionicons 
                        name={favoritedMovie ? "bookmark" : "bookmark-outline"}
                        size={28}
                        color="#FFFFFF"
                    />
                </HeaderButton>
            </Header>
            <Banner 
                resizeMethod="resize"
                source={{
                    uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                }}
            />
            <ButtonLink onPress={() => setOpenLink(true)} theme={applicationTheme}>
                <Feather 
                    name="link"
                    color="#FFFFFF"
                    size={24}
                />
            </ButtonLink>
            <Title numberOfLines={1} theme={applicationTheme}>{movie.title}</Title>
            <ContentArea>
                <Stars 
                    default={movie.vote_average}
                    count={10}
                    half={true}
                    starSize={20}
                    fullStar={ <Ionicons name="md-star" color="#E7A74E" size={24} /> }
                    emptyStar={ <Ionicons name="md-star-outline" color="#E7A74E" size={24} /> }
                    halfStar={ <Ionicons name="md-star-half" color="#E7A74E" size={24} /> }
                    disable={true}
                />
                <Rate theme={applicationTheme}>{movie.vote_average}/10</Rate>
            </ContentArea>
            <ListGenres 
                data={movie?.genres}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={(item) => <Genres data={item} />}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <TitleContainer>
                    <Title theme={applicationTheme}>Description</Title>
                    <ShareButton onPress={onShare}>
                        <Ionicons 
                            name="share-outline"
                            color={applicationTheme === 'light' ? '#191A30' : '#FFFFFF'}
                            size={28}
                        />
                    </ShareButton>
                </TitleContainer>
                <Description theme={applicationTheme}>
                    {movie?.overview}
                </Description>
            </ScrollView>
            {movie.homepage && <Modal animationType="slide" transparent={true} visible={openLink} >
                <ModalLink 
                    link={movie?.homepage} 
                    close={() => setOpenLink(false)}
                    title={movie?.title}    
                />
            </Modal>}
        </Container>
    );
};

export default Detail;