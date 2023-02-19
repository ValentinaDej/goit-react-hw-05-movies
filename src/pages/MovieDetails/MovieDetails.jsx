import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getFilmById } from '../../shared/Services/filmApi';

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
          <Link state={{ from }} to={`/movies/${movieId}/cast`}>
            <span>Cast</span>
          </Link>
          <Link state={{ from }} to={`/movies/${movieId}/reviews`}>
            <span>Reviews</span>
          </Link>
          <Outlet />
          {loading && <p>...loading films</p>}
          {error && <p>...films load faild</p>}
        </div>
      </>
    );
  }
};

export default MovieDetails;
