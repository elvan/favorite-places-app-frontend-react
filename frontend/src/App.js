import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PlaceAddPage } from './places/pages/PlaceAddPage';
import { UserDashboardPage } from './users/pages/UserDashboardPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <UserDashboardPage />
        </Route>
        <Route path='/places/add' exact>
          <PlaceAddPage />
        </Route>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
};
