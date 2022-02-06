import React, { useState, useCallback, useEffect } from "react";
import PhotoGallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Header from "./Header";
import Axios from "axios";

export default function Gallery(){

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const [photos, setPhotos] = useState([]);
    useEffect(()=>{
  try {
    Axios.get("http://localhost:3001/galleryphotos").then((response)=>{
      setPhotos(response.data);
    });
  } catch (error) {
    console.log(error);
  }
  
    }, []);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

    return(
    <div>
    <Header showSearchBar={false}/>
      <PhotoGallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
    );
}