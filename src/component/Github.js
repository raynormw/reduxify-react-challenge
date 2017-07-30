import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/githubActions'

import SearchProfile from './Search'
import Profile from './Profile'

class Github extends React.Component {
  render() {
    console.log(this.props.data, 'data')
    console.log(this.props.getProfile, 'profile');
    return (
      <div className="Github">
        <Link to="/">
          <button className="btn-home">
            Back to Home
          </button>
        </Link>
        <section id="card">
          <SearchProfile getProfile={this.props.getProfile.bind(this)}/>
          <Profile
            data={this.props.data}
            fetching={this.props.fetching}
            fetched={this.props.fetched}
            error={this.props.error}
          />
        </section>
        <span className="author">GitHub Card With ReactJs - Created By <a href="http://tirtawiryaputra.com" target="_blank" rel="noopener noreferrer" title="Tirta Wirya Putra">Tirta Wirya Putra</a></span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.user.data,
    fetching: state.user.fetching,
    fetched: state.user.fetched,
    error: state.user.error
  };
}

function mapDispatchToProps(dispatch) {
  return { getProfile: (username) => {dispatch(fetchUser(username))} }
}

export default connect(mapStateToProps, mapDispatchToProps)(Github);
