import FilterableDrinkContainer from './pages/FilterableDrinkContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './pages/Details';

function App() {
  return (
    <div className="flex text-neutral-300 bg-neutral-900">
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
  );
}

export default App;
