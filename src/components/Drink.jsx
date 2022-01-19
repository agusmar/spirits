const Drink = (props) => {
  return (
    <div className="w-1/4 p-4">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src="https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg"
          alt=""
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-900">{props.name}</h3>
      <h4 className="mt-1  text-md text-gray-700">{props.category}</h4>
      <p className="mt-1 text-sm text-gray-700">{props.alcohol}</p>
    </div>
  );
};

export default Drink;
