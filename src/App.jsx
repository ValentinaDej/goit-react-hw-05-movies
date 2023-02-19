import Menu from 'modules/Menu/Menu';
import UserRoutes from './modules/Routes/UserRoutes';

export const App = () => {
  return (
    <div>
      <Menu />
      <UserRoutes />
    </div>
  );
};
