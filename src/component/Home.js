import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        Welcome to Github User Info
        <br />
        <Link to="github">
          <button className="btn-home">
            Get Started
          </button>
        </Link>
      </div>
    )
  }
}
