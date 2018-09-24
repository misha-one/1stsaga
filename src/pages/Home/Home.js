import React, { Component } from "react";
import { connect } from "react-redux";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { aGetPhotos } from "../../store/actions";
import { Block } from "../../components";

class Home extends Component {
  componentWillMount() {
    this.props.aGetPhotos();
  }

  render() {
    const { photos } = this.props;
    console.log(photos);

    if (photos.error) {
      return (
        <div>
          <h6>error</h6>
        </div>
      );
    }

    return (
      <div>
        <div className="h1name">
          <h1>Photos</h1>
        </div>
        {photos.loading ? (
          <div>loading...</div>
        ) : photos.data ? (
          photos.data.map(photo => {
            return <Block data={photo} />;
          })
        ) : (
          <h3>Not photos</h3>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos
  };
};

export default connect(
  mapStateToProps,
  { aGetPhotos }
)(Home);
