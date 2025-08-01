const API_KEY = "DummyAPI";
const BASE_URL = "https://api.themoviedb.org/3";
const BEARER_TOKEN ="VITE_API_KEY"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  }
};

export const getPopularMovies = async (page) => {
    const response = await fetch(`${BASE_URL}/movie/popular?page=${page}`, options);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query, page,) => {
    const response = await fetch(`${BASE_URL}/search/movie?query=${query}&include_adult=false&page=${page}`, options);
    const data = await response.json();
    return data.results;
}

// Takes predefined mode, string, number.
export const nextPage = (mode, query="",newPage = 1,) => {
  if (mode === "popular") {
    return nextPageResults = searchMovies(query,newPage,)
  } else {
    return nextPageResults = getPopularMovies(newPage);
  }
}