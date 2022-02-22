import { useCallback, useEffect, useState } from 'react';
import DrinksList from '../components/DrinksList';
import SearchParams from '../components/SearchParams';

function searchDrinkByName(name) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
  );
}

function listIngredients() {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`);
}

function searchDrinkByIngredient(ingredient) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
  );
}

const FilterableDrinkContainer = () => {
  const [drinkName, setDrinkName] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [ingredient, setIngredient] = useState('');
  const [ingredientList, setIngredientList] = useState([]);

  const getDrinks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await searchDrinkByName(drinkName);
      const data = await response.json();
      setDrinks(data.drinks);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [drinkName]);

  useEffect(() => {
    async function requestIngredients() {
      const response = await listIngredients();
      const data = await response.json();
      setIngredientList(data.drinks);
    }
    getDrinks();
    requestIngredients();
  }, [getDrinks]);

  useEffect(() => {
    async function requestDrinksByIngredient() {
      const response = await searchDrinkByIngredient(ingredient);
      const data = await response.json();
      setDrinks(data.drinks);
    }
    requestDrinksByIngredient();
  }, [ingredient]);

  return (
    <div className="flex h-full">
      <SearchParams
        drinkName={drinkName}
        setDrinkName={setDrinkName}
        getDrink={getDrinks}
        ingredientList={ingredientList}
        setIngredient={setIngredient}
      />
      <DrinksList loading={loading} error={error} drinks={drinks} />
    </div>
  );
};

export default FilterableDrinkContainer;
