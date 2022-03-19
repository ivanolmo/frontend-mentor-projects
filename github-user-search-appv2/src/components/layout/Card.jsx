import { useContext } from 'react';
import GithubContext from '../../context/GithubContext';
import Header from './Header';
import UserSearch from './UserSearch';

function Card() {
  const { isLoading } = useContext(GithubContext);
  return isLoading ? (
    <p>loading</p>
  ) : (
    <>
      <Header />
      <UserSearch />
      {/* 
        inside card within card:
          subheader (image, name, @, join date)
          bio
          repos/followers/following
          loc/blog/twitter/work
      
      
      */}
      <div>da ist werk</div>
    </>
  );
}

export default Card;
