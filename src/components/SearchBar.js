import React from "react";
import {Link} from 'react-router-dom'

class SearchBar extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5">
          <div className="col-10">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Search a Movie"
            />
          </div>
          <div className="col-12">
            <Link
              to="/add"
              type="button"
              className="btn btn-md btn-danger"
              style={{ float: "right", marginTop: "-38px"}}
            >
              Add Movie
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
