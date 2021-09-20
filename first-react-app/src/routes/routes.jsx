import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ROUTES } from './routes.names';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
      <Route
        path={ROUTES.COUNTER_PAGE}
        component={() => <div>Counter page</div>}
      />
      <Route
        path={ROUTES.HOOK_COUNTER}
        component={() => <div>Hook page</div>}
      />
      <Route path={ROUTES.LISTS_PAGE} component={ListPageContainer} />
    </Switch>
  );
};
