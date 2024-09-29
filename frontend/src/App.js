
import './App.css';
import SearchBar from './components/SearchBar';
import CategorySelector from './components/CategorySelector';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <h1 Classname="heading">Product Dashboard</h1>
      <SearchBar />
      <CategorySelector />
      <ProductList />
    </div>
  );
}

export default App;


// Limitations:
// - The app fetches products in batches but doesn't cache previously fetched batches. If the user scrolls back up, it refetches products.
// - There's no error handling if the API fails.
// - The search functionality only works with one batch of 10 products at a time; it doesn't search across all batches.