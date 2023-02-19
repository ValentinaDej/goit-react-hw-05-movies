import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getFilmById } from '../../shared/services/filmsApi';
import Loader from 'modules/Loader/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [film, setFilm] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const result = await getFilmById(movieId);
        setFilm(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, [movieId, setFilm, setLoading, setError]);

  const location = useLocation();
  const from = location.state?.from || '/';
  const goBack = () => navigate(from);

  if (film) {
    const { title, overview, vote_average, genres, poster_path } = film;
    const vote = Math.round(vote_average * 10);

    const genresElemetns = genres.map(({ id, name }) => {
      return (
        <li key={id} className={css.filmGenresElement}>
          {name}
        </li>
      );
    });

    return (
      <section className={css.filmSection}>
        <button onClick={goBack} className={css.goBackBtn}>
          ⇠ Go back
        </button>
        <div className={css.filmInfo}>
          <div>
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt={title}
                width="200px"
              />
            ) : (
              <div className={css.noImage}>Opps... no poster</div>
            )}
          </div>
          <div className={css.filmInfoDetails}>
            <h2>{title}</h2>
            <p>User Score: {vote}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul className={css.filmGenres}>{genresElemetns}</ul>
          </div>
        </div>
        <div className={css.filmIAdditionalnfo}>
          <Link state={{ from }} to={`/movies/${movieId}/cast`}>
            <div className={css.filmIAdditionalnfoElement}>Cast</div>
          </Link>
          <Link state={{ from }} to={`/movies/${movieId}/reviews`}>
            <div className={css.filmIAdditionalnfoElement}>Reviews</div>
          </Link>
        </div>
        <Outlet />
        {loading && <Loader />}
        {error && <p>...films load faild</p>}
      </section>
    );
  }
};

export default MovieDetails;

MovieDetails.propTypes = {
  goBack: PropTypes.func,
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  vote: PropTypes.string,
  from: PropTypes.string,
  movieId: PropTypes.string,
};
