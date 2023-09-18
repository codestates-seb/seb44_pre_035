const movieData = API => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=ko-KR`,
  );
};

export const movieDetailFetchedData = (movieId, API) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API}&language=ko`,
  );
};

export const videoFetchedData = (movieId, API) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API}&language=ko`,
  );
};

export const creditFetchedData = (movieId, API) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API}&language=ko`,
  );
};

export default movieData;
