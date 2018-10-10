import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from 'react-router-dom';


class SelectedBlock extends Component {
  render() {
    //    const { d// ata: {urls, id, likes, user, description} } = t// his.props;
    // const data = this.props;
    const { data } = this.props;

    return (
      <div>
        <div className="selblock">
          <img className="selpic" alt="" src={data.urls.regular} key={data.id} />
          <div className="dscr">
            <p>
              <FontAwesomeIcon icon="heart" /> {data.likes}
            </p>
            <p>
              <FontAwesomeIcon icon="user" /> {data.user.name}
            </p>
            <div>{data.description ? (data.description) : (<p>no description</p>)}</div>
          </div>
        </div>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
          );
  }
}

SelectedBlock.propTypes = {
  data: PropTypes.object.isRequired
};

export default SelectedBlock;
