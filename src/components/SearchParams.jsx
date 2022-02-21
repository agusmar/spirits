const SearchParams = ({
  getDrink,
  drinkName,
  setDrinkName,
  ingredient,
  ingredientList,
  setIngredient,
}) => {
  return (
    <div className="p-8 border-r border-neutral-600 min-h-screen">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          getDrink();
        }}
      >
        <label
          htmlFor="search"
          className="block text-sm font-medium text-neutral-300"
        >
          Buscar por nombre
        </label>
        <div className="mt-1 relative flex items-center">
          <input
            type="text"
            onChange={(event) => setDrinkName(event.target.value)}
            value={drinkName}
            className="bg-neutral-800 mb-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-300 block w-full pr-12 sm:text-sm border-neutral-700 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="text-neutral-100 inline-flex items-center px-3 py-2 border border-neutral-800 shadow-sm text-sm leading-4 font-medium rounded-md text-neutral-200 bg-neutral-600 hover:bg-neutral-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
        >
          Buscar
        </button>

        <label
          for="ingredients-select"
          className="mt-8 block text-sm font-medium text-neutral-300"
        >
          Filtrar por ingrediente
        </label>
        <select
          name="ingredients"
          id="ingredients-select"
          value={ingredient}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-neutral-800"
          defaultValue="Ingredientes"
          onChange={(event) => setIngredient(event.target.value)}
        >
          {ingredientList.map((ingredient) => (
            <option
              key={ingredient.strIngredient1}
              value={ingredient.strIngredient1}
            >
              {ingredient.strIngredient1}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default SearchParams;
