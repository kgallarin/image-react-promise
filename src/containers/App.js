import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { receiveData } from "../actions/index";

import logo from "../logo.svg";
import "../styles/styles.css";

const imagesLoaded = parentNode => {
  const allImages = parentNode.querySelectorAll("img");
  for (const img of allImages) {
    if (!img.complete) {
      return false;
    }
  }
  return true;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.state = {
      isImageLoading: true
    };
  }
  componentDidMount() {
    const { receiveData } = this.props;
    receiveData();
  }
  handleImageLoaded() {
    this.setState({ isImageLoading: !imagesLoaded(this.galleryElement) });
  }

  render() {
    const { isLoading, err, resultData } = this.props;
    const { isImageLoading } = this.state;
    const isEmpty =
      Object.keys(resultData).length === 0 && resultData.constructor === Object;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {isEmpty ? (
            isLoading ? (
              <div> Loading . . .</div>
            ) : (
              err.message
            )
          ) : (
            resultData.data.map(res => (
              <div
                key={res.id}
                ref={element => {
                  this.galleryElement = element;
                }}
                className="image-container"
              >
                <img
                  className={isImageLoading ? "hide" : "show"}
                  onLoad={this.handleImageLoaded}
                  src={res.urls.regular}
                  alt="/"
                />
                {isImageLoading ? (
                  <div className="loading-text">
                    <p> Loading Image...</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  resultData: {}
};

App.propTypes = {
  receiveData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  err: PropTypes.string.isRequired,
  resultData: PropTypes.shape({
    data: PropTypes.array
  })
};

const mapStateToProps = state => state.dataReducer;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      receiveData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
