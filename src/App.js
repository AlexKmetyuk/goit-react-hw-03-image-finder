import "./style.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from "./components/Searchbar/Searchbar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import { fetchImages } from "./components/ApiServices/Api";
import { Component } from "react";
import Button from "./components/Button/Button.jsx";
import Loader from "react-loader-spinner";
import Modal from "./components/Modal/Modal.jsx";

class App extends Component {
  state = {
    query: null,
    hits: [],
    page: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.reset();
      this.searchHits();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  searchHits() {
    const { query, hits, page } = this.state;
    this.setState({ page: page + 1 });
    this.setState({ isLoading: true });
    fetchImages(query, page)
      .then((result) => {
        console.log(result.largeImageURL);
        if (page === 1) {
          this.setState({ hits: result.hits });
        } else {
          this.setState({ hits: [...hits, ...result.hits] });
        }
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  handleSubmit = (query) => {
    this.setState({ query: query });
  };

  loadMore = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    this.searchHits();
  };

  reset = () => {
    this.setState({ hits: [] });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onOpenModal = (event) => {
    this.setState({
      largeImageURL: event.target.dataset.img,
    });
    this.toggleModal();
  };

  render() {
    const { hits, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div className="main">
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        ) : null}
        {hits.length > 0 && (
          <main>
            <ImageGallery hits={hits} onOpenModal={this.onOpenModal} />
            <Button title="Load more" onClick={this.loadMore} />{" "}
          </main>
        )}
        {showModal && <Modal src={largeImageURL} onClose={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
