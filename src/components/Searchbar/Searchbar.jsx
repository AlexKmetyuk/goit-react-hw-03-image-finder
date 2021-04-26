import { Component } from "react";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({
      query: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
