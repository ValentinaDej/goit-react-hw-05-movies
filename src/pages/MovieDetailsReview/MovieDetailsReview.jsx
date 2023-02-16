import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getFilmReviewsById } from '../../shared/Services/filmApi';

const MovieDetailsReview = () => {
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
        const result = await getFilmReviewsById(movieId);
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

  const elements = items.map(({ id, author, content }) => {
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
    </section>
  );
};

export default MovieDetailsReview;
