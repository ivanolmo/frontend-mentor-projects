import { useContext } from 'react';
import GithubContext from '../../../context/GithubContext';

function UserHeading() {
  const { user } = useContext(GithubContext);
  const { avatar_url, html_url, name, login, created_at } = user;

  const dayjs = require('dayjs');
  let joinDate = dayjs(created_at).format('DD MMM YYYY');

  return (
    <div className='user__heading'>
      <img className='user__image' src={avatar_url} alt='github user' />
      <div className='user__subheading'>
        <h1 className='user__name'>{name}</h1>
        <h3 className='user__page'>
          <a href={html_url}>@{login}</a>
        </h3>
        <p className='user__joindate'>Joined {joinDate}</p>
      </div>
    </div>
  );
}

export default UserHeading;
