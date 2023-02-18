import Button from './components/Button'
import './App.css';
import SearchOptions from './components/SearchOptions';
import MainForm from './components/MainForm'
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('');
  const [license, setLicense] = useState('');
  const [safeSearch, setSafeSearch] = useState(false);
  const [displaySearchOptions, setDisplaySearchOptions] = useState(false);

  const handleSearchOptions = () => {
    setDisplaySearchOptions(true);
  };

  return (
    <div className="App">
      {displaySearchOptions ?
      <SearchOptions 
        setColor={setColor}
        setLicense={setLicense}
        setSafeSearch={setSafeSearch}
        setDisplaySearchOptions={setDisplaySearchOptions}
      />
      :
      <div>
        <MainForm className="main-page-form" />
        <div id="search-options-button">
          <Button handleClick={handleSearchOptions}>
            Search Options
          </Button>
        </div>
      </div>
      }
    </div>
  );
}

export default App;