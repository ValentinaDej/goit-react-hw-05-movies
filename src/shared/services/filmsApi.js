import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    language: 'en-US',
  },
});

const api_key = '7c4c8eade83a7a9829861e0d1ff26425';

export const getDailyPopularFilms = async (page = 1) => {
  const data = await instance.get('trending/movie/day', {
    params: {
      api_key,
      page,
    },
  });

  return data.data.results;
};

export const getFilmById = async id => {
  const data = await instance.get(`movie/${id}`, {
    params: {
      api_key,
    },
  });
  return data.data;
};

export const getFilmCreditsById = async id => {
  const data = await instance.get(`movie/${id}/credits`, {
    params: {
      api_key,
    },
  });
  return data.data.cast;
};

export const getFilmReviewsById = async id => {
  const data = await instance.get(`movie/${id}/reviews`, {
    params: {
      api_key,
    },
  });
  return data.data.results;
};

export const getFilmByKeyWords = async (query, page = 1) => {
  const data = await instance.get(`search/movie`, {
    params: {
      api_key,
      query,
      page,
    },
  });
  return data.data.results;
};
