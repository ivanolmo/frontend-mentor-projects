import { useContext } from 'react';

import GithubContext from '../../../context/GithubContext';
import { ReactComponent as LocationIcon } from '../../assets/icon-location.svg';
import { ReactComponent as WebsiteIcon } from '../../assets/icon-website.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg';
import { ReactComponent as CompanyIcon } from '../../assets/icon-company.svg';

function UserMeta() {
  const { user } = useContext(GithubContext);
  const { location, blog, twitter_username, company } = user;

  return (
    <section className='user__meta'>
      <div className='meta__line'>
        <LocationIcon className='line__icon' width={20} />
        <span>{location ? location : 'Not Available'}</span>
      </div>
      <div className='meta__line'>
        <WebsiteIcon className='line__icon' />
        <a href={`https://${blog}`} className='line__link'>
          {blog ? blog : 'Not Available'}
        </a>
      </div>
      <div className='meta__line'>
        <TwitterIcon className='line__icon' />
        <a
          href={`https://twitter.com/${twitter_username}`}
          className='line__link'
        >
          {twitter_username ? twitter_username : 'Not Available'}
        </a>
      </div>
      <div className='meta__line'>
        <CompanyIcon className='line__icon' />
        <span>{company ? company : 'Not Available'}</span>
      </div>
    </section>
  );
}

export default UserMeta;
