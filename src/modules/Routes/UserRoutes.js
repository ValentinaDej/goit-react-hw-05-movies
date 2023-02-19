import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MovieDetailsCast = lazy(() =>
  import('pages/MovieDetailsCast/MovieDetailsCast')
);
const MovieDetailsReview = lazy(() =>
  import('pages/MovieDetailsReview/MovieDetailsReview')
);
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const Loader = lazy(() => import('modules/Loader/Loader'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieDetailsCast />} />
          <Route path="reviews" element={<MovieDetailsReview />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;

UserRoutes.propTypes = {
  Loader: PropTypes.element,
  Movies: PropTypes.element,
  MovieDetails: PropTypes.element,
  MovieDetailsCast: PropTypes.element,
  MovieDetailsReview: PropTypes.element,
  NotFoundPage: PropTypes.element,
};
