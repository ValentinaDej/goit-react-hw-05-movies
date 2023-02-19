import Films from 'modules/Films/Films';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <h2 className={css.title}>Trending today</h2>
      <Films />
    </>
  );
};

export default HomePage;
