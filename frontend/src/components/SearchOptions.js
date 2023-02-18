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

    };

    return (
        <div id="container">
            <form id="search-options-form">
                <label>
                    Color:
                </label>
                <select onChange={handleColorChange} name="color">
                    {colors.map(color => 
                        <option>{color}</option>
                    )}
                </select>
                <label>
                    License:
                </label>
                <select onChange={handleLicenseChange} name="license">
                    {licenses.map(license => 
                        <option>{license}</option>
                    )}
                </select>
                <label>
                    Safe Search:
                </label>
                <select onChange={handleSafeSearchChange} name="Safe search">
                    <option>yes</option>
                    <option>no</option>
                </select>
            </form>
            <Button onClick={onApplyButtonClick}>
                Apply
            </Button>
        </div>
    );
};