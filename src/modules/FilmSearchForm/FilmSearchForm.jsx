import { useState } from 'react';

const FilmSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({ search: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ search: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={state.search}
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

export default FilmSearchForm;
