import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';

const ProductList = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { products, loading, total } = useSelector((state) => state.products);
  const { selectedCategory } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchProducts({ category: selectedCategory, limit: 10, skip: page * 10 }));
  }, [dispatch, selectedCategory, page]);

  const loadMoreProducts = () => {
    if (products.length < total) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
             <img src={product.thumbnail} alt={product.name} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      {loading && <p>Loading products...</p>}
      <div ClassNmae="button-container"><button onClick={loadMoreProducts} disabled={loading || products.length >= total} >
        Load More
      </button></div>
    </div>
  );
};

export default ProductList;
