import React, { useState, useEffect } from 'react';
import { Container, ListMovies } from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import api, { key } from '../../services/api';
import SearchItem from '../../components/SearchItem';
import Loading from '../../components/Loading';
import { useThemeContext } from '../../contexts/ThemeContext';

function Search() {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    const route = useRoute();
    const navigation = useNavigation();
    const { applicationTheme } = useThemeContext();

    useEffect(() => {
        let isActive = true;

        async function getSearchMovie() {
            const response = await api.get('/search/movie', {
                params: {
                    api_key: key,
                    query: route.params.name,
                    page: 1
                }
            });

            if(isActive) {
                setMovie(response.data.results);
                setLoading(false);
            }
        };

        if(isActive) {
            getSearchMovie();
        };

        return () => {
            isActive = false;
        };
    }, []);

    function navigateDetailsPage(item) {
        navigation.navigate('Detail', { id: item.id });
    };

    if(loading) {
        return <Loading />;
    }
    return (
        <Container theme={applicationTheme}>
            <ListMovies 
                data={movie}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={ ({ item }) => <SearchItem data={item} navigatePage={() => navigateDetailsPage(item)} /> }
            />
        </Container>
    );
};

export default Search;