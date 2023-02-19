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
      <MainForm 
        className="main-page-form" 
        setDisplayFilteredDownload={props.setDisplayFilteredDownload}
        setDisplaySimpleDownload={props.setDisplaySimpleDownload}
        setQuantity={props.setQuantity}
        quantity={props.quantity}
        searchText={props.searchText}
        setSearchText={props.setSearchText}
      />
    </div>
  );
};

function MainForm(props) {

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const handleSimpleSearch = () => {
    if(props.searchText != "" && props.quantity != "")
      props.setDisplaySimpleDownload(true);
  };

  const handleFilteredSearch = () => {
    if(props.searchText != "" && props.quantity != "")
      props.setDisplayFilteredDownload(true);
  };
  
  return (
    <form id="main-page-form" onSubmit={handleSearch}>
      <div id="form-elements-container">
        <h1 id="home-title">Thiea</h1>
        <div id="search-input-container">
            <input id="search-input" placeholder="search" type="text" value={props.searchText} onChange={(e) => props.setSearchText(e.target.value)} required />
        </div>
        <br />
        <div id="quantity-input-container">
          <span id="quantity-span"> 
            Quantity:
          </span>
          <input type="number" max="100" value={props.quantity} onChange={(e) => props.setQuantity(parseInt(e.target.value))} required />
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