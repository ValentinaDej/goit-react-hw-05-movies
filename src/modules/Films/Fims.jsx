import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getDailyPopularFilms } from '../../shared/Services/filmApi';

const Films = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchFilms = async () => {
      setState({
        ...state,
        loading: true,
        error: null,
      });

      try {
        const result = await getDailyPopularFilms();
        setState(prevState => {
          return {
            ...prevState,
            items: [...prevState.items, ...result],
          };
        });
      } catch (error) {
        setState({ ...state, error });
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

  const { items, loading, error } = state;
  const elements = items.map((id, title) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));
  return (
    <div>
      <p>Hello</p>
      <ol>{elements}</ol>
      {loading && <p>...loading films</p>}
      {error && <p>...films load faild</p>}
    </div>
  );
};

export default Films;
