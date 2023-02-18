import Button from './components/Button'
import './App.css';
import SearchOptions from './components/SearchOptions';
import MainForm from './components/MainForm'
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('');
  const [license, setLicense] = useState('');
  const [safeSearch, setSafeSearch] = useState(false);

  const handleSearchOptions = () => {
    // hand search options
    console.log("launching search options");
  };

  return (
    <div className="App">
      <div id="search-options-button">
        <Button handleClick={handleSearchOptions}>
          Search Options
        </Button>
      </div>
      <MainForm className="main-page-form" />
    </div>
  );
}

export default App;