import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { aGetPhotos } from "../../store/actions";

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
        <div className="h1name"><h1>Photos</h1></div>
        {photos.loading ? (
          <div>loading...</div>
        ) :
        photos.data ? (
          photos.data.map(photo => {
            return ( 
              <div className="block">
                                
                <img className='pic' alt='' src={photo.urls.small} key={photo.id} />
                  <div className='dscr'>                   
                    <p><FontAwesomeIcon icon="heart" />{' '}{photo.likes}</p>
                    <p><FontAwesomeIcon icon="user" />{' '}{photo.user.name}</p>
                    {photo.description} 
                  </div>
              </div>
            );
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