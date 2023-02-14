import { Link } from 'react-router-dom';

const FilmsList = ({ items }) => {
  const elements = items.map(({ id, title }) => {
    return (
      <li key={id}>
        <Link to={`/movies/${id}`}>{title}</Link>
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default FilmsList;

FilmsList.defaultProps = {
  items: [],
};
