import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Ingredients from '../components/Ingredients';

function getDrinkById(id) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
}

const Details = () => {
  const { id } = useParams();
  const [drink, setDrink] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function requestDrinkById() {
      setLoading(true);
      const response = await getDrinkById(id);
      const data = await response.json();
      console.log(data);
      setDrink(data.drinks[0]);
      setLoading(false);
    }
    requestDrinkById();
  }, [id]);

  if (loading === true) {
    return <p>Cargando</p>;
  }

  const ingredientsAndMeasures = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    ingredientsAndMeasures.push({
      ingredient: ingredient,
      measure: measure,
    });
  }
  return (
    <div>
      <section className="text-neutral-400 overflow-hidden">
        <div className="container px-5 py-24">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-sm text-neutral-500 tracking-widest">
                    {drink.strCategory}
                  </h2>
                  <h1 className="text-white text-3xl font-medium mb-4">
                    {drink.strDrink}
                  </h1>
                </div>
                <button className="rounded-full w-10 h-10 bg-neutral-800 p-0 border-0 inline-flex items-center justify-center text-neutral-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>

              <div>
                <h2 className="text-md text-neutral-100 tracking-widest pb-2">
                  Instructions
                </h2>
                <p className="leading-relaxed mb-4">{drink.strInstructions}</p>
              </div>
              <div>
                <h2 className="text-md text-neutral-100 tracking-widest pb-2">
                  Ingredients
                </h2>
                {ingredientsAndMeasures.map((ingredientsAndMeasures) =>
                  ingredientsAndMeasures.ingredient ||
                  ingredientsAndMeasures.measure ? (
                    <Ingredients
                      key={ingredientsAndMeasures.ingredient}
                      ingredient={ingredientsAndMeasures.ingredient}
                      measure={ingredientsAndMeasures.measure}
                    />
                  ) : (
                    ''
                  ),
                )}

                <div className="pt-4">
                  <span className="text-md text-neutral-100 tracking-widest pb-2 mr-2">
                    Glass
                  </span>
                  <span className="ml-auto text-neutral-500">
                    {drink.strGlass}
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="drink"
              className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded"
              src={drink.strDrinkThumb}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
