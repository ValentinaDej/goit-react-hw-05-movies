import { memo } from 'react';
import PropTypes from 'prop-types';

import useForm from 'shared/hooks/useForm';
import initialState from './initialState';

const FilmSearchForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { search } = state;

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={search}
        onChange={handleChange}
        type="text"
        placeholder="input text..."
        name="search"
        required
      />
      <button>Find</button>
    </form>
  );
};

export default memo(FilmSearchForm);

FilmSearchForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  search: PropTypes.string,
};
