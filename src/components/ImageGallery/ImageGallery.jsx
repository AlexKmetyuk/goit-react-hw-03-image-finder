import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ hits, onOpenModal }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem hits={hits} onOpen={onOpenModal} />
    </ul>
  );
};
export default ImageGallery;
