import Button from './components/Button'
import './App.css';
import FilteredDownload from './components/FilteredDownload'
import SearchOptions from './components/SearchOptions';
import MainForm from './components/Home'
import React, { useState } from 'react';
import Home from './components/Home';

function App() {
  const [color, setColor] = useState('');
  const [license, setLicense] = useState('');
  const [safeSearch, setSafeSearch] = useState(false);

  // routing
  const [displaySearchOptions, setDisplaySearchOptions] = useState(false);
  const [displayFilteredDownload, setDisplayFilteredDownload] = useState(false);

  const handleSearchOptions = () => {
    setDisplaySearchOptions(true);
  };

  if(displayFilteredDownload)
    return (<FilteredDownload />);
  else if(displaySearchOptions)
    return (
      <SearchOptions 
        setColor={setColor}
        setLicense={setLicense}
        setSafeSearch={setSafeSearch}
        setDisplaySearchOptions={setDisplaySearchOptions}
      />
    );
  else  
    return (
      <Home 
        handleSearchOptions={handleSearchOptions}
        setDisplayFilteredDownload={setDisplayFilteredDownload}
      />
    );
}

export default App;