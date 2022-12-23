import React, { useState } from 'react';
import { client } from '../lib/client';
import { Product } from '../components';
import FilterButtons from '../components/filterButtons';

const Explore = ({ products }) => {
  const [item, setItem] = useState(products);
  const menuItems = [...new Set(products?.map((Val) => Val.category))];
  const filterItem = (data) => {
    const newItem = products?.filter((newVal) => {
      return newVal.category === data;
    });
    setItem(newItem);
  };

  return (
    <section className='explore'>
      <FilterButtons
        filterItem={filterItem}
        setItem={setItem}
        menuItems={menuItems}
        products={products}
      />
      <div className='explore-container'>
        {item?.map((item) => (
          <Product key={item._id} product={item} />
        ))}
      </div>
    </section>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Explore;
