import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { Container } from './styles';
import Header from '../../components/Header';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { 
    SearchContainer, 
    Input, 
    SearchButton, 
    Title,
    BannerButton,
    Banner,
    SliderMovie
} from './styles';

import SliderItem from '../../components/SliderItem';
import api, { key } from '../../services/api';
import { getListMovies, randomBanner } from '../../utils/movie';
import Loading from '../../components/Loading';

function Home() {
    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [bannerMovie, setBannerMovie] = useState({});
    const [input, setInput] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        let isActive = true;
        const ac = new AbortController();

        async function getMovies() {
            try {
                const [nowData, popularData, topData] = await Promise.all([
                    api.get(`/movie/now_playing`, {
                        params: {
                            api_key: key,
                            page: 1
                        }
                    }),
                    api.get(`/movie/popular`, {
                        params: {
                            api_key: key,
                            page: 1
                        }
                    }),
                    api.get(`/movie/top_rated`, {
                        params: {
                            api_key: key,
                            page: 1
                        }
                    })
                ]);
                if(isActive) {
                    setNowMovies(getListMovies(10, nowData.data.results));
                    setPopularMovies(getListMovies(5, popularData.data.results));
                    setTopMovies(getListMovies(5, topData.data.results));
                    setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)]);
                    setLoading(false);
                }
            }catch(err) {
                console.log(err);
            }
        }
        getMovies();
        return () => {
            isActive = false;
            ac.abort();
        }
    }, []);

    function navigateDetailsPage(item) {
        navigation.navigate('Detail', { id: item.id });
    }

    function handleSearchMovie() {
        if (!input) return;
        
        navigation.navigate('Search', { name: input });
        setInput('');
    }

    if(loading) {
        return <Loading />;
    }

    return (
        <Container>
            <Header title="My Movies" />

            <SearchContainer>
                <Input 
                    placeholder="Search for a movie..."
                    placeholderTextColor="#DDD"
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />
                <SearchButton onPress={handleSearchMovie}>
                    <Feather name="search" size={36} color="#191A30" />
                </SearchButton>
            </SearchContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Now playing</Title>

                <BannerButton activeOpacity={0.9} onPress={() => navigateDetailsPage(bannerMovie)}>
                    <Banner 
                        source={{
                            uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}`
                        }}
                    />
                </BannerButton>
                <SliderMovie 
                    keyExtractor={(item) => String(item.id)}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={nowMovies}
                    renderItem={({ item }) => (
                        <SliderItem data={item} navigatePage={() => navigateDetailsPage(item)} />
                    )}
                />

                <Title>Trending</Title>
                <SliderMovie 
                    keyExtractor={(item) => String(item.id)}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={popularMovies}
                    renderItem={({ item }) => (
                        <SliderItem data={item} navigatePage={() => navigateDetailsPage(item)} />
                    )}
                />

                <Title>Top rated</Title>
                <SliderMovie 
                    keyExtractor={(item) => String(item.id)}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={topMovies}
                    renderItem={({ item }) => (
                        <SliderItem data={item} navigatePage={() => navigateDetailsPage(item)} />
                    )}
                />
            </ScrollView>
        </Container>
    );
};

export default Home;