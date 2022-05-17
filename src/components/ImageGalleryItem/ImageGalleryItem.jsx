import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends PureComponent {
    state = {
        id: this.props.imageId,
    };

    render() {
        const { webformatURL, tags, imageId } = this.props;
        return (
            <li className={s.item}>
                <img src={webformatURL} alt={tags} id={imageId} onClick={() => {
                    this.setState({ id: imageId });
                    this.props.openModal(this.state);
                }} />
            </li>
        )
    }
};
    
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
};