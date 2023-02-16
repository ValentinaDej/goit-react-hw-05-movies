import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import MovieDetailsCast from 'pages/MovieDetailsCast/MovieDetailsCast';
import MovieDetailsReview from 'pages/MovieDetailsReview/MovieDetailsReview';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<MovieDetailsCast />} />
        <Route path="reviews" element={<MovieDetailsReview />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default UserRoutes;
