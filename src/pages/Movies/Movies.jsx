import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import FilmSearchForm from 'modules/FilmSearchForm/FilmSearchForm';
import FilmsList from 'modules/FilmsList/FilmsList';
import { getFilmByKeyWords } from '../../shared/Services/filmApi';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearhParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const result = await getFilmByKeyWords(search);
        setItems([...result]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchFilms();
    }
  }, [search, setItems, setLoading, setError]);

  const changeSearch = ({ search }) => {
    setSearhParams({ search });
  };

  return (
    <div>
      Search Movies page
      <FilmSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <FilmsList items={items} />}
      {loading && <p>...loading films</p>}
      {error && <p>...films load faild</p>}
    </div>
  );
};

export default Movies;
