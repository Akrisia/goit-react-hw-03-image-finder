import s from './App.module.css';
import { PureComponent } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";

export default class App extends PureComponent {
  state = {
    query: '',
    images: []
  }

  onSubmit = ({ query }) => {
    this.setState({ query });
  }

  handleImages = ({images}) => {
    this.setState({images})
  }

  render() {
    const { query } = this.state;
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.onSubmit}/>
        <ImageGallery query={query} handleImages={this.handleImages}/>
      </div>
    );
  }
};
