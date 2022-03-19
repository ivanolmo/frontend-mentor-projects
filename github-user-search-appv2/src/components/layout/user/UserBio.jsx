import { useContext } from 'react';
import GithubContext from '../../../context/GithubContext';

function UserBio() {
  const { user } = useContext(GithubContext);

  return !user.bio ? (
    <p className='user__bio'>This profile has no bio</p>
  ) : (
    <section className='user__bio'>
      <p>{user.bio}</p>
    </section>
  );
}

export default UserBio;
