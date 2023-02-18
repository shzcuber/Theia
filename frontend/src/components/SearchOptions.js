import "./SearchOptions.css"
import React, { useState } from 'react';
import Button from './Button';

const colors = [
    'monochrome', 
    'blue',
    'black'
];

const licenses = [
    'creative commons', 
    'cc-by',
    'cc by-sa'
];

function Select(props) {
    return (
        <div>
            <label>
                { props.name }
            </label>
            <select onChange={props.onChange} name={props.name}>
                {props.items.map(item => 
                    <option key={item}>{item}</option>
                )}
            </select>
        </div>
    );
}

export default function SearchOptions(props) {
    const handleColorChange = (event) => {
        props.setColor(event.target.value);
    };

    const handleLicenseChange = (event) => {
        props.setLicense(event.target.value);
    };

    const handleSafeSearchChange = (event) => {
        props.setSafeSearch(event.target.value);
    };

    const onApplyButtonClick = () => {
        props.setDisplaySearchOptions(false);
    };

    return (
        <div id="container">
            <form id="search-options-form">
                <Select 
                    name="Color: "
                    onChange={handleColorChange}
                    items={colors}
                />
                <Select 
                    name="License: "
                    onChange={handleLicenseChange}
                    items={licenses}
                />
                <div label="safe-search">
                    <label>
                        Safe Search:
                    </label>
                    <select onChange={handleSafeSearchChange} name="Safe search">
                        <option key="yes">yes</option>
                        <option key="no">no</option>
                    </select>
                </div>
                <Button handleClick={onApplyButtonClick}>
                    Apply
                </Button>
            </form>
        </div>
    );
};