const ImageGalleryItem = ({ hits, onOpen }) => {
  return hits.map((hit) => (
    <li key={hit.id} className="ImageGalleryItem">
      <img
        data-img={hit.largeImageURL}
        src={hit.webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={onOpen}
      />
    </li>
  ));
};
export default ImageGalleryItem;
