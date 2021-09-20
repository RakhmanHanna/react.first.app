import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes.names';
import './style.scss';

export const HomePage = () => {
  return (
    <div className="Home-page">
      <h1>Home Page</h1>
      {Object.entries(ROUTES).map(([routerName, path]) => (
        <Link to={path} key={routerName}>
          <button className="switcher">{routerName}</button>
        </Link>
      ))}
    </div>
  );
};
