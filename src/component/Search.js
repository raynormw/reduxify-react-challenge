import React from 'react';

export default class SearchProfile extends React.Component {
  _handleForm(e) {
    e.preventDefault();
    let username = this.refs.username.value
    this.props.fetchProfile(username);
    this.refs.username.value = '';
  }

  render() {
    return (
      <div className="search--box">
        <form onSubmit={this._handleForm.bind(this)}>
           <label><input type="search" ref="username" placeholder="Type Username + Enter"/></label>
         </form>
      </div>
    )
  }
}
