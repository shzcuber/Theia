import React, { useEffect, useState } from 'react';
import ImageCollection from './ImageCollection';

export default function SimpleDownload(props) {
    const [imagePaths, setImagePaths] = useState(null)

    useEffect(() => {
        fetch("http://127.0.0.1:5000/simple_search?" + new URLSearchParams({
            keywords: props.searchText,
            max_size: props.quantity,
            safesearch: (props.safeSearch ? "On" : "Off")
        }))
        .then(response => {
            console.log("I have run")
            setImagePaths(response['url']);
        })
        .catch(err => console.log("error"));
    });

    if(!imagePaths) return "Loading";
    else return <ImageCollection imagePaths={imagePaths} />;
}