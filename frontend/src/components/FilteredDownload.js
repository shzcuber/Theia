import React, { useEffect, useState } from 'react';
import { getImagePaths } from '../util/getImagePaths';
import ImageCollection from './ImageCollection';
import HomeButton from './HomeButton';
import './FilteredDownload.css'


function ImageCollectionWithSelect(props) {
    // {'path': true/false}
    const handleClickImage = (path, e) => {
        e.preventDefault();
        const prevVal = document.getElementById(path).style.display;
        document.getElementById(path).style.display = prevVal=="block" ? "none" : "block";
    };

    return (<div id="image-collection-images-container">
            {props.imagePaths.map(path => 
                {
                    return (<div onClickCapture={(e)=>handleClickImage(path, e)} id="filtered-download-img-container">
                                <img className="filtered-download-img" src={path} />
                                <img id={path} className="X-overlay" src={'X.png'} />
                            </div>);
                }
            )}
            </div>);

}

export default function FilteredDownload(props) {
    const [imagePaths, setImagePaths] = useState(null);
    const [displayX, setDisplayX] = useState({})

    useEffect(() => {
        getImagePaths(props.searchText, props.quantity, props.safeSearch)
        .then(imagePaths => {
            var temp = {};
            imagePaths.forEach(path => temp[path] = false);
            setDisplayX(temp);
            setImagePaths(imagePaths);
        })
        .catch(err => console.log(err));
    }, []);

    return(
        <div id="filtered-download-container">
            <HomeButton setDisplayFilteredDownload={props.setDisplayFilteredDownload}/>
            <h1>Choose the pictures you like</h1>
            {imagePaths  
                ? <ImageCollectionWithSelect setDisplayX={setDisplayX} displayX={displayX} imagePaths={imagePaths} /> 
                : "Loading"
            }
        </div>
    )
}