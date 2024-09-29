import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, setSelectedCategory } from '../redux/categorySlice';

const CategorySelector = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory, loading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryChange = (event) => {
    dispatch(setSelectedCategory(event.target.value));
  };

  return (
    <div className="category-selector">
      <select value={selectedCategory} onChange={ handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.slug} >
            {category.name}
          </option>
        ))}
      </select>
      {loading && <p>Loading categories...</p>}
    </div>
  );
};

export default CategorySelector;
