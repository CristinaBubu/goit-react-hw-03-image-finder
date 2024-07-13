import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';
const ImageGallery = ({ images, onModalOpen }) => {
    return (
        <ul className={style.gallery}>
            {images.length > 0 && images.map((image, index) => (
                <ImageGalleryItem
                    key={`${image.id}-${index}`}
                    item={image}
                    onModalOpen={onModalOpen}
                />
            ))}
        </ul>
    );
}
ImageGallery.propTypes = {
    onModalOpen: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    })).isRequired,
};
export default ImageGallery;