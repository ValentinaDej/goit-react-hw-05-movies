import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getDailyPopularFilms } from '../../shared/services/filmsApi';
import FilmsList from 'shared/components/FilmsList/FilmsList';
import Loader from 'modules/Loader/Loader';

const Films = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const result = await getDailyPopularFilms();
        setItems([...result]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, [setItems, setLoading, setError]);

  return (
    <div>
      {items.length > 0 && <FilmsList items={items} />}
      {loading && <Loader />}
      {error && <p>...films load faild</p>}
    </div>
  );
};

export default Films;

Films.propTypes = {
  items: PropTypes.array,
};
