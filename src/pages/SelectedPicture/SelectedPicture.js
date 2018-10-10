import React, { Component } from "react";
import { connect } from "react-redux";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { aGetPhoto } from "../../store/actions";
import { SelectedBlock } from "../../components";

class Home extends Component {
  componentWillMount() {
    //console.log('тут работает: '+this.props.match.params.id)
    const id = this.props.match.params.id;
    this.props.aGetPhoto(id);
  }

  render() {
    const { photo } = this.props;
    console.log(photo);

    if (photo.error) {
      return (
        <div>
          <h6>error</h6>
        </div>
      );
    }

    return (
      <div>
        <div className="h1name">
          <h1>Selected Photo</h1>
        </div>

        {photo.loading ? (
          <div>loading...</div>
        ) : photo.data ? (

          <SelectedBlock data={photo.data} />


        ) : (
          <h3>Not photos</h3>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photo: state.photo
  };
};

export default connect(
  mapStateToProps,
  { aGetPhoto }
)(Home);
