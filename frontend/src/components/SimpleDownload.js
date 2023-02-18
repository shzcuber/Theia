import React, { useEffect, useState } from 'react';
import Button from './Button';
import { getImagePaths  } from '../util/getImagePaths';
import HomeButton from './HomeButton';
import ImageCollection from './ImageCollection';

export default function SimpleDownload(props) {
    const [imagePaths, setImagePaths] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getImagePaths(props.searchText, props.quantity, props.safeSearch)
        .then(imagePaths => setImagePaths(imagePaths))
        .catch(err => console.log(err));
    }, []);

    const downloadImages = () => {
        fetch("http://127.0.0.1:5000/simple_search?" + new URLSearchParams({
            keywords: props.searchText,
            max_results: props.quantity,
            safesearch: (props.safeSearch ? "On" : "Off"),
            download: true
        }))
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'folder.zip';

            // trigger the download
            document.body.appendChild(link);
            link.click();

            // clean up the temporary link and loading state
            document.body.removeChild(link);
            setLoading(false);
        })
        .catch(err => console.log(err));
    }


    return (
        <div>
            <Button handleClick={downloadImages} disabled={loading}>Download Images</Button>
            <HomeButton setDisplaySimpleDownload={props.setDisplaySimpleDownload}/>
            {imagePaths  
                ? <ImageCollection imagePaths={imagePaths} /> 
                : "Loading"
            }
        </div>
    );
}