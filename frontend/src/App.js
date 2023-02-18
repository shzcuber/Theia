import logo from './logo.svg';
import Button from './components/Button'
import './App.css';
import React, { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState('')
  const [quantity, setQuantity] = useState('')
  const [filterSearch, setFilterSearch] = useState(false)

  const handleSearch = (event) => {
    event.preventDefault();
    // handle search logic
  };

  const handleSearchOptions = () => {
    // hand search options
    console.log("launching search options");
  };

  const handleSimpleSearch = () => {
    // hand search options
    console.log("launching simple search");
  };

  const handleFilteredSearch = () => {
    // hand search options
    console.log("launching filtered search");
  };

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <div style={{ textAlign: 'center' }}>
          <label>
            Search:
            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          </label>
          <br />
          <label>
            Quantity:
            <input type="number" max="100" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
          </label>
          <br />
          <Button handleClick={handleSimpleSearch}>
            Simple Search
          </Button>
          <Button handleClick={handleFilteredSearch}>
            Filtered Search
          </Button>
        </div>
      </form>
      <Button handleClick={handleSearchOptions}>
        Search Options
      </Button>
    </div>
  );
}

export default App;
