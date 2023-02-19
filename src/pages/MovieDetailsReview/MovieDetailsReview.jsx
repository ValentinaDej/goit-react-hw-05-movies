import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getFilmReviewsById } from '../../shared/Services/filmApi';

const MovieDetailsReview = () => {
  const [filmReview, setFilmReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const result = await getFilmReviewsById(movieId);
        setFilmReview([...result]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, [movieId, setFilmReview, setLoading, setError]);

  const elements = filmReview.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <span>{author}</span>
        <span>{content}</span>
      </li>
    );
  });

  return (
    <section>
      {elements.length > 0 ? (
        <div> {elements}</div>
      ) : (
        <div>We dont have any reviews</div>
      )}
      {loading && <p>...loading films</p>}
      {error && <p>...films load faild</p>}
    </section>
  );
};

export default MovieDetailsReview;
