import FilterableDrinkContainer from './pages/FilterableDrinkContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './pages/Details';
import FavoriteContext from './contexts/FavoriteContext';

function App() {
  return (
    <FavoriteContext.Provider value="dark">
      <div className="flex text-neutral-300 bg-neutral-900 w-full min-h-screen">
        <Router>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <FilterableDrinkContainer />
            </Route>
          </Switch>
        </Router>
      </div>
    </FavoriteContext.Provider>
  );
}

export default App;
