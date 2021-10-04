function getListMovies(sizes, movies) {
    let popularMovies = [];

    for(let i = 0, l = sizes; i < l; i++) {
        popularMovies.push(movies[i]);
    }

    return popularMovies;
}

function randomBanner(movies) {
    return Math.floor(Math.random() * movies.length);
}

export { getListMovies, randomBanner };