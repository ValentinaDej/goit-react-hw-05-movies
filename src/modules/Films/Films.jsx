import { useState, useEffect } from 'react';

import { getDailyPopularFilms } from '../../shared/Services/filmApi';
import FilmsList from 'modules/FilmsList/FilmsList';

const Films = () => {
  const [state, setState] = useState({
    items: [],
    // loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchFilms = async () => {
      setState({
        ...state,
        // loading: true,
        error: null,
      });

      try {
        const result = await getDailyPopularFilms();
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
            // loading: false,
          };
        });
      }
    };

    fetchFilms();
  }, [state]);

  const { items, error } = state;

  return (
    <div>
      {items.length > 0 && <FilmsList items={items} />}
      {/* {loading && <p>...loading films</p>} */}
      {error && <p>...films load faild</p>}
    </div>
  );
};

export default Films;
