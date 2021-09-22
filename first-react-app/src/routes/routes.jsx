import { Switch, Route } from 'react-router-dom';
import { CounterPage } from '../pages/CounterPage';
import { HomePage } from '../pages/HomePage';
import { ListsPageCounter} from '../pages/ListsPage/container';
import { ROUTES } from './routes.names';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
      <Route
        path={ROUTES.COUNTER_PAGE}
        component={CounterPage>}
      />
      <Route
        path={ROUTES.HOOK_COUNTER}
        component={HookPage}
      />
      <Route path={ROUTES.LISTS_PAGE} component={ListPageContainer} />
    </Switch>
  );
};
