import s from './App.module.css';
import { PureComponent } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Loader from './Loader';
import Button from './Button';
import Modal from 'components/Modal';

export default class App extends PureComponent {
  state = {
    query: '',
    images: [],
    total: 0,
    showModal: false,
    imageId: 0,
    loading: false,
    page: 1
  };

  onSubmit = ({ query }) => {
    this.setState({ query });
  };

  handleImages = ({ images, total, loading }) => {
    this.setState({ images, total, loading })
  };

  onLoadMore = ({ page }) => {
    this.setState({ page: page + 1 });
  };

  openModal = ({ id }) => {
    this.setState({ showModal: true, imageId: id });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { query, images, total, showModal, imageId, loading, page } = this.state;
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.onSubmit}/>
        <ImageGallery query={query} page={page} handleImages={this.handleImages} openModal={this.openModal}/>
        {loading && <Loader />}
        {images.length > 0 && images.length < total && <Button page={page} onLoadMore={this.onLoadMore} />}
        {showModal && <Modal closeModal={this.closeModal}>
            {images.map(image => image.id === imageId &&
            <img key={imageId} src={image.largeImageURL} alt={image.tags}/>
            )}
        </Modal>}
      </div>
    );
  }
};
