import React from 'react';
import ImageCollection from './ImageCollection';
import HomeButton from './HomeButton';
import './FilteredDownload.css'

export default function FilteredDownload(props) {
    return(
        <div id="filtered-download-container">
            <HomeButton setDisplayFilteredDownload={props.setDisplayFilteredDownload}/>
            <h1>Choose the pictures you like</h1>
            {/* <ImageCollection imagePaths={props.imagePaths} /> */}
        </div>
    )
}