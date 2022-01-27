const Drink = ({ drink }) => {
  if (!drink) {
    return <h2 className="text-lg font-bold">Loading...</h2>;
  }
  return (
    <div className="p-4">
      <div className="w-full aspect-w-1 aspect-h-1 bg-neutral-800 rounded-lg overflow-hidden xl:aspect-w-5 xl:aspect-h-6">
        <img
          src={drink.strDrinkThumb}
          alt=""
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-lg font-bold text-neutral-400">
        {drink.strDrink}
      </h3>
      <h4 className="mt-1  text-md text-neutral-500">{drink.strIBA}</h4>
      <p className="mt-1 text-sm text-neutral-500">{drink.strIngredient1}</p>
    </div>
  );
};

export default Drink;
