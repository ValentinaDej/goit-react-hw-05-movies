import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  params: {
    language: 'UA',
  },
});

const api_key = '7c4c8eade83a7a9829861e0d1ff26425';

export const getDailyPopularFilms = async (page = 1) => {
  const data = await instance.get('popular', {
    params: {
      api_key: api_key,
      page,
    },
  });

  return data.data.results;
};
