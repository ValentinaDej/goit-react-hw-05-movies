import { useState, useEffect } from 'react';

import { getDailyPopularFilms } from '../../shared/Services/filmApi';
import FilmsList from 'modules/FilmsList/FilmsList';

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
      {loading && <p>...loading films</p>}
      {error && <p>...films load faild</p>}
    </div>
  );
};

export default Films;
