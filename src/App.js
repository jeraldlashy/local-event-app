import { Route, Switch } from 'react-router-dom';

import AllEventsPage from './pages/AllEvents';
import NewEventPage from './pages/NewEvent';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllEventsPage />
        </Route>
        <Route path='/new-event'>
          <NewEventPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
