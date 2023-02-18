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
                <label>
                    Color:
                </label>
                <select onChange={handleColorChange} name="color">
                    {colors.map(color => 
                        <option key={color}>{color}</option>
                    )}
                </select>
                <label>
                    License:
                </label>
                <select onChange={handleLicenseChange} name="license">
                    {licenses.map(license => 
                        <option key={license}>{license}</option>
                    )}
                </select>
                <label>
                    Safe Search:
                </label>
                <select onChange={handleSafeSearchChange} name="Safe search">
                    <option key="yes">yes</option>
                    <option key="no">no</option>
                </select>
            </form>
            <Button handleClick={onApplyButtonClick}>
                Apply
            </Button>
        </div>
    );
};