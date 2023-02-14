import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import FilmSearchForm from 'modules/FilmSearchForm/FilmSearchForm';
import FilmsList from 'modules/FilmsList/FilmsList';
import { getFilmByKeyWords } from '../../shared/Services/filmApi';

const Movies = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearhParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setState(prevState => ({ ...prevState, loading: true }));
        const data = await getFilmByKeyWords(search);
        setState(prevState => ({ ...prevState, items: data }));
      } catch (error) {
        setState(prevState => ({ ...prevState, error }));
      } finally {
        setState(prevState => ({ ...prevState, loading: false }));
      }
    };

    if (search) {
      fetchFilms();
    }
  }, [search]);

  const changeSearch = ({ search }) => {
    setSearhParams({ search });
  };

  const { items } = state;
  return (
    <div>
      Search Movies page
      <FilmSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <FilmsList items={items} />}
    </div>
  );
};

export default Movies;
