import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from 'react-router-dom';

class Block extends Component {
  render() {
    //    const { d// ata: {urls, id, likes, user, description} } = t// his.props;
    // const data = this.props;
    const { data } = this.props;

    return (
      <div className="block">
        <Link to={`/${data.id}`}>
          <img className="pic" alt="" src={data.urls.small} key={data.id} />
        </Link>
        <div className="dscr">
          <p>
            <FontAwesomeIcon icon="heart" /> {data.likes}
          </p>
          <p>
            <FontAwesomeIcon icon="user" /> {data.user.name}
          </p>
          <p>{data.description}</p>
        </div>
      </div>
    );
  }
}

Block.propTypes = {
  data: PropTypes.object.isRequired
};

export default Block;

/*
const props = {
  itemOne: "one",
  itemTwo: "two",
};

const {itemTwo} = props;
заберет вернет только то что в itemTwo

а если ты сделаешь
const itemTwo = props;
то оно вернет все что есть в props
 */
