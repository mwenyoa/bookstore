import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus as catStatus } from '../redux/categories/categories';

const Categories = () => {
  const categoryStatus = useSelector((state) => state.categories);
  const dispatchAction = useDispatch();

  const checkCategoryStatus = () => {
    dispatchAction(catStatus());
  };

  return (
    <section id="categories-page">
      <h2>Categories</h2>
      <p>{categoryStatus}</p>
      <button type="button" onClick={() => checkCategoryStatus()}>CHECK STATUS</button>
    </section>
  );
};

export default Categories;
