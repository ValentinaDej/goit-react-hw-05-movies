import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getFilmById } from '../../shared/Services/filmApi';

const MovieDetails = () => {
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });

  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilms = async () => {
      setState({
        ...state,
        loading: true,
        error: null,
      });

      try {
        const result = await getFilmById(movieId);
        setState(prevState => {
          return {
            ...prevState,
            item: result,
          };
        });
      } catch (error) {
        setState(prevState => {
          return {
            ...prevState,
            error,
          };
        });
      } finally {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };

    fetchFilms();
  }, []);

  const goBack = () => navigate(-1);

  const { title, overview, vote_average, genres, poster_path } = state.item;

  const vote = Math.round(vote_average * 10);

  const genresElemetns = genres?.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });

  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : '';

  return (
    <>
      <button onClick={goBack}> Go back</button>
      <div>
        <img src={imgUrl} alt={title} width="200px" />
        <p>{title}</p>
        <p>{vote}%</p>
        <p>{overview}</p>
        <ul>{genresElemetns}</ul>
      </div>
    </>
  );
};

export default MovieDetails;
