import s from './ImageGallery.module.css';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { fetchImages } from 'services/FetchImages';

export default class ImageGallery extends PureComponent {
    state = {
        images: [],
        total: 0,
        loading: false,
        error: null
    };

    async componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            const { page, query } = this.props;
            const { images } = this.state;
            this.setState({ loading: true });
            try {
                await fetchImages(query, page)
                    .then(response =>
                        this.setState({
                            images:
                                prevProps.query !== this.props.query
                                    ? response.data.hits
                                    : images.concat(response.data.hits),
                            total: response.data.totalHits
                        }));
            } catch (error) {
                this.setState({ error });
            } finally {
                this.setState({ loading: false });
            }
        }
        this.props.handleImages(this.state);
    };

    render() {
        const { images } = this.state;
        const { openModal } = this.props;
        return (
            <ul className={s.gallery}>
                {images.map(image => {
                    return <ImageGalleryItem key={image.id} imageId={image.id} webformatURL={image.webformatURL} tags={image.tags} openModal={openModal} />
                })}
            </ul>
        );
    };
};

ImageGallery.propTypes = {
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    handleImages: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired
};