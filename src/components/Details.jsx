import React from 'react';

const Details = () => {
  return (
    <div>
      <section className="text-neutral-400 overflow-hidden">
        <div className="container px-5 py-24">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-sm text-neutral-500 tracking-widest">
                    Cocktail
                  </h2>
                  <h1 className="text-white text-3xl font-medium mb-4">
                    Mojito
                  </h1>
                </div>
                <button className="rounded-full w-10 h-10 bg-neutral-800 p-0 border-0 inline-flex items-center justify-center text-neutral-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
                <p className="leading-relaxed mb-4">
                  1. Muddle mint leaves with sugar and lime juice. <br />
                  2. Add a splash of soda water and fill the glass with cracked
                  ice. <br />
                  3. Pour the rum and top with soda water. <br />
                  4. Garnish and serve with straw.
                </p>
              </div>
              <div>
                <h2 className="text-md text-neutral-100 tracking-widest pb-2">
                  Ingredients
                </h2>

                <div className="flex border-t border-neutral-800 py-1">
                  <span className="text-neutral-400">Light rum</span>
                  <span className="ml-auto text-neutral-500">2-3 oz</span>
                </div>
                <div className="flex border-t border-neutral-800 py-1">
                  <span className="text-neutral-400">Juice of 1</span>
                  <span className="ml-auto text-neutral-500">Lime</span>
                </div>
                <div className="flex border-t border-neutral-800 py-1">
                  <span className="text-neutral-400">2 tsp</span>
                  <span className="ml-auto text-neutral-500">Sugar</span>
                </div>
                <div className="flex border-t border-neutral-800 py-1">
                  <span className="text-neutral-400">2-4</span>
                  <span className="ml-auto text-neutral-500">Mint</span>
                </div>
                <div className="flex border-t border-b mb-6 border-neutral-800 py-1">
                  <span className="text-neutral-400">Null</span>
                  <span className="ml-auto text-neutral-500">Soda water</span>
                </div>
                <div className="pb-2">
                  <span className="text-md text-neutral-100 tracking-widest pb-2 mr-2">
                    Glass
                  </span>
                  <span className="ml-auto text-neutral-500">
                    Highball glass
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="drink"
              className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded"
              src="https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
