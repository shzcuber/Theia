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


    function b64toBlob(b64Data, contentType='', sliceSize=512) {
      const byteCharacters = atob(b64Data);
      const byteArrays = [];
    
      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
    
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
    
        const byteArray = new Uint8Array(byteNumbers);
    
        byteArrays.push(byteArray);
      }
    
      const blob = new Blob(byteArrays, {type: contentType});
      return blob;
    }

    useEffect(() => {
        getImagePaths(props.searchText, props.quantity, props.safeSearch)
        .then(imagePaths => setImagePaths(imagePaths))
        .catch(err => console.log(err));
    }, []);

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    const downloadImagesAsZip = () => {
      Promise.all(
        imagePaths.map((imageUrl) => {
          const url = `${proxyUrl}${imageUrl}`;
          return fetch(url).then((response) => response.blob());
        })
      )
        .then((blobs) => {
          const zip = new JSZip();
          blobs.forEach((blob, index) => {
            zip.file(`image${index}.jpg`, blob);
          });
          return zip.generateAsync({ type: 'blob' });
        })
        .then((content) => {
          saveAs(content, 'images.zip');
        })
        .catch((error) => {
          console.error('Error downloading images', error);
        });
    };
    
  


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