import React from 'react';

const Ingredients = ({ ingredient, measure }) => {
  return (
    <div>
      <div className="flex border-t border-neutral-800 py-1">
        <span className="text-neutral-400">{ingredient}</span>
        <span className="ml-auto text-neutral-500">{measure}</span>
      </div>
    </div>
  );
};

export default Ingredients;
