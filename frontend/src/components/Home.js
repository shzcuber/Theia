import React, { useState } from 'react';
import './Home.css'
import Button from './Button'

export default function Home(props) {
  return (
    <div>
      <div id="search-options-button">
        <Button handleClick={props.handleSearchOptions}>
          Search Options
        </Button>
      </div>
      <MainForm className="main-page-form" />
    </div>
  );
};

function MainForm() {
  const [searchText, setSearchText] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleSearch = (event) => {
    event.preventDefault();
    // handle search logic
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
    <form id="main-page-form" onSubmit={handleSearch}>
      <div id="form-elements-container">
        <div id="search-input-container">
            <input id="search-input" placeholder="search" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>
        <br />
        <div id="quantity-input-container">
          <span id="quantity-span"> 
            Quantity:
          </span>
          <input type="number" max="100" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
        </div>
        <br />
        <div id="buttons">
          <Button handleClick={handleSimpleSearch}>
            Simple Search
          </Button>
          <Button handleClick={handleFilteredSearch}>
            Filtered Search
          </Button>
        </div>
      </div>
    </form>
  );
};