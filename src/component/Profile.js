import React from 'react'

export default class Profile extends React.Component {
  render() {
    let data = this.props.data;
    let followers = `${data.html_url}/followers`;
    let repositories = `${data.html_url}?tab=repositories`;
    let following = `${data.html_url}/following`;
    if (data.message === 'Not Found')
      return (
         <div className="notfound">
           <h2>Oops !!!</h2>
           <p>Username not found, please correct your input..</p>
         </div>
      );
    else if (this.props.fetching === true)
      return (
          <div className="loading">
            <h2>Loading..</h2>
            <p>Fetching data..</p>
          </div>
      );
    else if (this.props.error !== null)
      return (
         <div className="notfound">
           <h2>Oops !!!</h2>
           <p>Something gone wrong, please check your input and reload</p>
         </div>
      );
    else
    return (
      <section className="github--profile">
        <div className="github--profile__info">
          <a href={data.html_url} target="_blank" title={data.name || data.login}><img src={data.avatar_url} alt={data.login}/></a>
          <h2><a href={data.html_url} title={data.login} target="_blank">{data.name || data.login}</a></h2>
          <h3>{data.location || "Time is illussion"}</h3>
        </div>
        <div className="github--profile__state">
          <ul>
            <li>
              <a href={followers} target="_blank" title="Number Of Followers"><i>{data.followers}</i><span>Followers</span></a>
            </li>
            <li>
              <a href={repositories} target="_blank" title="Number Of Repository"><i>{data.public_repos}</i><span>Repository</span></a>
            </li>
            <li>
              <a href={following} target="_blank" title="Number Of Following"><i>{data.following}</i><span>Following</span></a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
