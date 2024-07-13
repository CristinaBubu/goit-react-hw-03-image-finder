import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({item, onModalOpen}) => {

    return(
        <li className={style.gallery_item} key={item.id}>
            <img className={style.gallery_image} src={item.webformatURL} alt={item.tags} onClick={() => onModalOpen(item.largeImageURL)}/>
        </li>
    )
}

ImageGalleryItem.prototype = {
    item: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    }),
    onModalOpen: PropTypes.func.isRequired
}

export default ImageGalleryItem;