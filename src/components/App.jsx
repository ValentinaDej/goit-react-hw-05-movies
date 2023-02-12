import { Route, Routes } from 'react-router-dom';

import Menu from 'modules/Menu/Menu';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPages';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
