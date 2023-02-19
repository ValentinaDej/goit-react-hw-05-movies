import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

import FilmSearchForm from 'modules/FilmSearchForm/FilmSearchForm';
import FilmsList from 'shared/components/FilmsList/FilmsList';
import { getFilmByKeyWords } from '../../shared/services/filmsApi';
import Loader from 'modules/Loader/Loader';

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
        if (!result.length) {
          Notify.failure('No found');
          setItems([]);
          return;
        }
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
      <FilmSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <FilmsList items={items} />}
      {loading && <Loader />}
      {error && <p>...films load faild</p>}
    </div>
  );
};

export default Movies;

Movies.propTypes = {
  changeSearch: PropTypes.func,
  items: PropTypes.array,
};
