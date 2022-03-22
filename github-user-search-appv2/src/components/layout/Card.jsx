import { useEffect } from 'react';

import { getUser } from '../../context/GithubActions';
import UserHeading from '../user/UserHeading';
import UserBio from '../user/UserBio';
import UserStats from '../user/UserStats';
import UserData from '../user/UserData';
import Spinner from './Spinner';

function Card({ isLoading, dispatch, user }) {
  useEffect(() => {
    async function getFirstUser() {
      dispatch({ type: 'SET_LOADING' });
      const firstUser = await getUser('octocat');
      dispatch({ type: 'GET_USER', payload: firstUser });
    }
    getFirstUser();
  }, [dispatch]);

  const {
    avatar_url,
    name,
    html_url,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = user;

  return isLoading ? (
    <Spinner />
  ) : (
    <section className='card'>
      <UserHeading
        avatar={avatar_url}
        name={name}
        url={html_url}
        login={login}
        date={created_at}
      />
      <UserBio bio={bio} />
      <UserStats
        repos={public_repos}
        followers={followers}
        following={following}
      />
      <UserData
        location={location}
        blog={blog}
        twitter_username={twitter_username}
        company={company}
      />
    </section>
  );
}

export default Card;
