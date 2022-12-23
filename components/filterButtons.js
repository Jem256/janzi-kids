import React from 'react';

const FilterButtons = ({ filterItem, setItem, menuItems, products }) => {
  return (
    <div className='filter-btns'>
      <button onClick={() => setItem(products)}>All</button>
      {menuItems.map((Val, id) => {
        return (
          <button onClick={() => filterItem(Val)} key={id}>
            {Val}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
