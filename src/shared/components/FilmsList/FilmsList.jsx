import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './FilmList.module.css';

const FilmsList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title }) => {
    return (
      <li key={id} className={css.filmsList}>
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

FilmsList.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};
