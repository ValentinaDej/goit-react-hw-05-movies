import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import items from './items';
import styles from './Menu.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

const Menu = () => {
  const elelements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={styles.wrapper}>
      <ul className={styles.menu}>{elelements}</ul>
    </div>
  );
};

export default Menu;

Menu.propTypes = {
  getClassName: PropTypes.func,
  to: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
};
