import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="continer shadow p-3 mb-3 mt-3 bg-white rounded">
        <div className="row ">
          <div className="col-3"></div>
          <img className="col-6" src={this.props.image} alt="new" />
          <div className="col-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3 float-left">
            <img src={this.props.profile_picture} />
          </div>
          <div className="col-md-6 float-left">{this.props.username}</div>
          <div className="col-md-3 float-right">{this.props.likes} likes</div>
        </div>
      </div>
    );
  }
}

export default Display;
