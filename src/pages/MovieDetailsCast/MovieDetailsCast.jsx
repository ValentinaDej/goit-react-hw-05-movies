import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getFilmCreditsById } from '../../shared/Services/filmApi';

const MovieDetailsCast = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilms = async () => {
      setState({
        ...state,
        loading: true,
        error: null,
      });

      try {
        const result = await getFilmCreditsById(movieId);
        setState(prevState => {
          return {
            ...prevState,
            items: [...result],
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

  const { items } = state;

  const elements = items.map(
    ({ cast_id, original_name, character, profile_path }) => {
      return (
        <li key={cast_id}>
          <span>{original_name}</span>
          <span>{character}</span>
          {profile_path && (
            <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} />
          )}
        </li>
      );
    }
  );

  return (
    <>
      <div>
        <section>{elements}</section>
      </div>
    </>
  );
};

export default MovieDetailsCast;
