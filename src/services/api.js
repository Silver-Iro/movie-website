const API_KEY = "dd181dcd2767fa193f0799a31bff78ae";
const BASE_URL = "https://api.themoviedb.org/3";
const BEARER_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDE4MWRjZDI3NjdmYTE5M2YwNzk5YTMxYmZmNzhhZSIsIm5iZiI6MTc1Mzk5MzQ4NC44NCwic3ViIjoiNjg4YmQxMGNiYzRiMzE4ZWU0ZjNkNTk0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.97fqOinD68xEfsLLAhIWOTOhqvCvGVz1j1yyf4B7Z80"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  }
};

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?page=1`, options);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?query=${query}&include_adult=false&page=1`, options);
    const data = await response.json();
    return data.results;
}