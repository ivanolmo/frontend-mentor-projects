import { useContext } from 'react';
import GithubContext from '../../../context/GithubContext';

function UserStats() {
  const { user } = useContext(GithubContext);
  const { public_repos, followers, following } = user;

  return (
    <section className='user__stats'>
      <div className='stats__item'>
        <h4 className='item__heading'>Repos</h4>
        <span className='item__count'>{public_repos}</span>
      </div>
      <div className='stats__item'>
        <h4 className='item__heading'>Followers</h4>
        <span className='item__count'>{followers}</span>
      </div>
      <div className='stats__item'>
        <h4 className='item__heading'>Following</h4>
        <span className='item__count'>{following}</span>
      </div>
    </section>
  );
}

export default UserStats;
