import Button from './components/Button'
import './App.css';
import SearchOptions from './components/SearchOptions';
import MainForm from './components/Home'
import React, { useState } from 'react';
import Home from './components/Home';

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
      <Home 
        handleSearchOptions={handleSearchOptions}
      />}
    </div>
  );
}

export default App;