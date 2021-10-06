import React, { useState, useEffect } from 'react';
import { Container, ListMovies } from './styles';
import Header from '../../components/Header';
import { getMoviesSave, deleteMovie } from '../../utils/storage';
import FavoriteItem from '../../components/FavoriteItem';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useThemeContext } from '../../contexts/ThemeContext';

function Movies() {
    const [movies, setMovies] = useState([]);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const { applicationTheme } = useThemeContext();

    useEffect(() => {
        let isActive = true;

        async function getFavoriteMovies() {
            const result = await getMoviesSave('@myMovies');

            if(isActive) {
                setMovies(result);
            }
        };

        if(isActive) {
            getFavoriteMovies();
        }

        return () => {
            isActive = false;
        }
    }, [isFocused]);

    async function handleDelete(id) {
        const result = await deleteMovie(id);
        setMovies(result);
    };

    function navigatePageDetails(item) {
        navigation.navigate('Detail', { id: item.id });
    };

    return (
        <Container theme={applicationTheme}>
            <Header title="My Movies" />
            <ListMovies 
                showsVerticalScrollIndicator={false}
                data={movies}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <FavoriteItem 
                        data={item}
                        deleteMovie={handleDelete}
                        navigatePage={() => navigatePageDetails(item)}
                    />
                )}
            />
        </Container>
    );
};

export default Movies;