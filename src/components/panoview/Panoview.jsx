import * as PANOLENS from "panolens"

import './panoview.css'
console.log(PANOLENS);


const imageContainer = document.querySelector(".image-container");

const panorama = new PANOLENS.ImagePanorama('./pano2.jpeg');
console.log(panorama);

const viewer = new PANOLENS.Viewer(
    {
        container: imageContainer,
        
    }
);
viewer.add( panorama );

const Pano = () => {
    return(
        <>
        <div className="image-container">{}</div>
        </>
    );
};

export default Pano;