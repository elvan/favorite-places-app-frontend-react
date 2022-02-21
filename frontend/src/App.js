import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PlaceAddPage } from './places/pages/PlaceAddPage';
import { MainNavigation } from './shared/components/navigation/MainNavigation';
import { UserDashboardPage } from './users/pages/UserDashboardPage';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Switch>
            <Route path='/' exact>
              <UserDashboardPage />
            </Route>
            <Route path='/places-add' exact>
              <PlaceAddPage />
            </Route>
            <Redirect to='/' />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};
