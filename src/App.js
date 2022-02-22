import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PlaceAddPage } from './places/pages/PlaceAddPage';
import { PlaceDashboard } from './places/pages/PlaceDashboard';
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
            <Route path='/users/:userId/places' exact>
              <PlaceDashboard />
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
