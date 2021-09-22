import { Link } from 'react-router-dom';
import { Counter } from '../../common/usercard/counter';
import { ROUTES } from '../../routes/routes.names';

export const CounterPage = () => {
  const [countValue, setCountValue] = useState(0);
  const handleIncrement = () => setCountValue(countValue + 1);
  const handleDecrement = () => {
    if (countValue > 0) setCountValue(countValue - 1);
  };
  const handleReset = () => setCountValue(0);
  return (
    <div className="counter-page">
      <h1>Single Counter Page</h1>
      <Link to={ROUTES.HOME_PAGE}>
        <button className="return-btn">Get back</button>
      </Link>
      <Counter
        countValue={countValue}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    </div>
  );
};
