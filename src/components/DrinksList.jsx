import Drink from './Drink';

const DrinksList = ({ loading, error, drinks }) => {
  if (loading) {
    return <p className="p-8 h-screen">La información esta cargando...</p>;
  }
  if (error) {
    return (
      <p className="p-8 h-screen">
        Ups! Tuvimos un error cargando la información.
      </p>
    );
  }
  if (drinks === null) {
    return (
      <p className="p-8 h-screen">
        Parece que no hay resultados para tu búsqueda, intenta nuevamente.
      </p>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-lg font-bold">Cocktails</h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {drinks.map((drink) => (
          <Drink key={drink.idDrink} drink={drink} />
        ))}
      </div>
    </div>
  );
};

export default DrinksList;
