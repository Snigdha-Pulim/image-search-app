import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  search_value = even => {
    this.setState({
      search: even.target.value
    });
  };

  enter = e => {
    if (e.key == "Enter") {
      this.return_post();
    }
  };

  return_post = () => {
    this.props.search(this.state.search);
  };

  render() {
    return (
      <nav class="navbar navbar-inverse navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <div class="form-inline">
            <input
              class="form-control mr-sm-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.search_value}
              onKeyDown={this.enter}
            ></input>
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={this.return_post}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
  
  export default Navbar;