import Drink from './components/Drink';
import SearchParams from './components/SearchParams';

function App() {
  return (
    <div className="flex">
      <Drink
        name="Whiskey sour"
        category="Contemporary drink"
        alcohol="Whiskey"
      />
    </div>
  );
}

export default App;
