import React from 'react';

export default class Profile extends React.Component {
  render() {
    let data = this.props.data;
    let followers = `${data.homeUrl}/followers`;
    let repositories = `${data.homeUrl}?tab=repositories`;
    let following = `${data.homeUrl}/following`;
    if (data.notFound === 'Not Found')
      return (
         <div className="notfound">
           <h2>Oops !!!</h2>
           <p>Username not found, please correct your input..</p>
         </div>
      );
    else
    return (
      <section className="github--profile">
        <div className="github--profile__info">
          <a href={data.homeUrl} target="_blank" title={data.name || data.username}><img src={data.avatar} alt={data.username}/></a>
          <h2><a href={data.homeUrl} title={data.username} target="_blank">{data.name || data.username}</a></h2>
          <h3>{data.location || "Time is illussion"}</h3>
        </div>
        <div className="github--profile__state">
          <ul>
            <li>
              <a href={followers} target="_blank" title="Number Of Followers"><i>{data.followers}</i><span>Followers</span></a>
            </li>
            <li>
              <a href={repositories} target="_blank" title="Number Of Repository"><i>{data.repos}</i><span>Repository</span></a>
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
