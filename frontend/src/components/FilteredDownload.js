import React, { useEffect, useState } from 'react';
import { getImagePaths } from '../util/getImagePaths';
import ImageCollection from './ImageCollection';
import HomeButton from './HomeButton';
import './FilteredDownload.css'

export default function FilteredDownload(props) {
    const [imagePaths, setImagePaths] = useState(null);

    useEffect(() => {
        getImagePaths(props.searchText, props.quantity, props.safeSearch)
        .then(imagePaths => setImagePaths(imagePaths))
        .catch(err => console.log(err));
    }, []);

    return(
        <div id="filtered-download-container">
            <HomeButton setDisplayFilteredDownload={props.setDisplayFilteredDownload}/>
            <h1>Choose the pictures you like</h1>
            {imagePaths  
                ? <ImageCollection imagePaths={imagePaths} /> 
                : "Loading"
            }
        </div>
    )
}