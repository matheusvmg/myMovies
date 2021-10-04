import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getMoviesSave(key) {
    const myMovies = await AsyncStorage.getItem(key);

    let moviesSaved = JSON.parse(myMovies) || [];

    return moviesSaved;
};

export async function saveMovie(key, newMovie) {
    let moviesStored = await getMoviesSave(key);

    const hasMovie = moviesStored.some((item) => item.id === newMovie.id);

    if(!hasMovie) {
        moviesStored.push(newMovie);
        await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
    }
};

export async function deleteMovie(id) {
    let moviesStored = await getMoviesSave('@myMovies');

    let myMovies = moviesStored.filter((item) => item.id !== id);

    await AsyncStorage.setItem('@myMovies', JSON.stringify(myMovies));
    return myMovies;
};

export async function hasMovie(movie) {
    let moviesStored = await getMoviesSave('@myMovies');

    const hasMovie = moviesStored.find((item) => item.id === movie.id);

    return hasMovie ? true : false;
};