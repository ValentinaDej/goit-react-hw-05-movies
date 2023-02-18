import { Link, useLocation } from 'react-router-dom';

const FilmsList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title }) => {
    return (
      <li key={id}>
        <Link state={{ from: location }} to={`/movies/${id}`}>
          {title}
        </Link>
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default FilmsList;

FilmsList.defaultProps = {
  items: [],
};