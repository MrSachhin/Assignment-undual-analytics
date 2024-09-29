import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchProducts({ search }));
  };

  return (
    <form onSubmit={handleSearchSubmit} className="search-bar">
      <input type="text" value={search} onChange={handleSearch} placeholder="Search products..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
