import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getFilmCreditsById } from '../../shared/services/filmsApi';
import Loader from 'modules/Loader/Loader';

const MovieDetailsCast = () => {
  const [filmCast, setFilmCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const result = await getFilmCreditsById(movieId);
        setFilmCast([...result]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, [movieId, setFilmCast, setLoading, setError]);

  const elements = filmCast.map(
    ({ cast_id, original_name, character, profile_path }) => {
      return (
        <li key={cast_id}>
          <span>{original_name}</span>
          <span>{character}</span>
          {profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={original_name}
            />
          )}
        </li>
      );
    }
  );

  return (
    <>
      <div>
        {elements.length > 0 ? (
          <div> {elements}</div>
        ) : (
          <div>We dont have any cast information</div>
        )}
        {loading && <Loader />}
        {error && <p>...films load faild</p>}
      </div>
    </>
  );
};

export default MovieDetailsCast;

MovieDetailsCast.propTypes = {
  cast_id: PropTypes.string,
  original_name: PropTypes.string,
  character: PropTypes.string,
  profile_path: PropTypes.string,
};
