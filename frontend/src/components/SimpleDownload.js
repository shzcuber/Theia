import React, { useEffect, useState } from 'react';
import Button from './Button';
import JSZip from "jszip";
import { saveAs } from 'file-saver';
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

    const downloadImagesAsZip = () => {
        const zip = new JSZip();
      
        // Replace imageLinks with an array of your image links
        const imageLinks = [
          'http://www.1mg.com/articles/wp-content/uploads/2015/07/diagnostics-test-for-diabetic-patients-hba1c-2.jpg'
        ];
      
        // Loop through each image link and add it to the zip file
        imageLinks.forEach((link, index) => {
          fetch(`http://localhost:3001/images/${encodeURIComponent(link)}?url=${encodeURIComponent('http://cors-anywhere.herokuapp.com/')}`)
            .then(response => response.blob())
            .then(blob => {
              zip.file(`image_${index}.jpg`, blob);
            });
        });
      
        // Create the zip file and save it to the user's computer
        zip.generateAsync({ type: 'blob' })
          .then(blob => {
            saveAs(blob, 'images.zip');
          });
      }
      


    return (
        <div>
            <Button handleClick={downloadImagesAsZip} disabled={loading}>Download Images</Button>
            <HomeButton setDisplaySimpleDownload={props.setDisplaySimpleDownload}/>
            {imagePaths  
                ? <ImageCollection imagePaths={imagePaths} /> 
                : "Loading"
            }
        </div>
    );
}