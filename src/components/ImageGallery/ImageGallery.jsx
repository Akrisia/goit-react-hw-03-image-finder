import s from './ImageGallery.module.css';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from '../Loader';
import Button from '../Button';
import Modal from 'components/Modal';
import { fetchImages } from 'services/FetchImages';

export default class ImageGallery extends PureComponent {
    state = {
        images: [],
        total: 0,
        showModal: false,
        imageId: 0,
        loading: false,
        page: 1,
        error: null
    }

    onLoadMore = ({ page }) => {
        this.setState({ page: page + 1 });
    }

    openModal = ({id}) => {
        this.setState({ showModal: true, imageId: id });
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.query !== this.props.query
        || prevState.page !== this.state.page) {
            const { query } = this.props;
            const { page, images } = this.state;
            this.setState({ loading: true });
            try {
                await fetchImages(query, page)
                    .then(response =>
                        this.setState({ images: images.concat(response.data.hits), total: response.data.totalHits }));
            } catch (error) {
                this.setState({ error });
            } finally {
                this.setState({ loading: false });
            }
        }
        this.props.handleImages(this.state);
    }

    render() {
        const { images, loading, page, total, showModal, imageId } = this.state;
        return (
            <>
                <ul className={s.gallery}>
                    {images.map(image => {
                        return <ImageGalleryItem key={image.id} imageId={image.id} webformatURL={image.webformatURL} tags={image.tags} openModal={this.openModal} />
                })}
            </ul>
                {loading && <Loader />}
                {images.length > 0 && images.length < total && <Button page={page} onLoadMore={this.onLoadMore} />}
                {showModal && <Modal closeModal={this.closeModal}>
                        {images.map(image => image.id === imageId &&
                        <img key={imageId} src={image.largeImageURL} alt={image.tags}/>
                    )}
                </Modal>}
            </>
        );
    }
};

ImageGallery.propTypes = {
    query: PropTypes.string.isRequired,
    handleImages: PropTypes.func.isRequired
};