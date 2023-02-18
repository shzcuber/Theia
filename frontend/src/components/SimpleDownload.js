import React, { useEffect, useState } from 'react';
import HomeButton from './HomeButton';
import ImageCollection from './ImageCollection';

export default function SimpleDownload(props) {
    const [imagePaths, setImagePaths] = useState(null);

    useEffect(() => {
        console.log("using effect")
        fetch("http://127.0.0.1:5000/simple_search?" + new URLSearchParams({
            keywords: props.searchText,
            max_results: props.quantity,
            safesearch: (props.safeSearch ? "On" : "Off")
        }))
        .then(response => response.json())
        .then(response => {
            setImagePaths(response.map(item => item['image']));
        })
        .catch(err => console.log(err));
    }, []);


    return (
        <div>
            <HomeButton setDisplaySimpleDownload={props.setDisplaySimpleDownload}/>
            {imagePaths  
                ? <ImageCollection imagePaths={imagePaths} /> 
                : "Loading"
            }
        </div>
    );
}