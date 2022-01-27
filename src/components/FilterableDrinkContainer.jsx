import { useEffect, useState } from 'react';
import DrinksList from './DrinksList';
import SearchParams from './SearchParams';

function searchDrinkByName(name) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
  );
}

function listIngredients() {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`);
}

const FilterableDrinkContainer = () => {
  const [drinkName, setDrinkName] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [ingredients, setIngredients] = useState([]);

  async function getDrinks() {
    try {
      setLoading(true);
      const response = await searchDrinkByName(drinkName);
      const data = await response.json();
      setDrinks(data.drinks);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    async function requestIngredients() {
      const response = await listIngredients();
      const data = await response.json();
      setIngredients(data.drinks);
    }
    getDrinks();
    requestIngredients();
  }, []);

  return (
    <div className="flex h-full">
      <SearchParams
        drinkName={drinkName}
        setDrinkName={setDrinkName}
        getDrink={getDrinks}
        ingredients={ingredients}
      />
      <DrinksList loading={loading} error={error} drinks={drinks} />
    </div>
  );
};

export default FilterableDrinkContainer;
