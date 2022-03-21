import { ReactComponent as LocationIcon } from '../../assets/icon-location.svg';
import { ReactComponent as WebsiteIcon } from '../../assets/icon-website.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg';
import { ReactComponent as CompanyIcon } from '../../assets/icon-company.svg';

function UserData({ location, blog, twitter_username, company }) {
  // TODO icon color/transparency when no info is present
  return (
    <section className='user__data'>
      <div className='data__line'>
        <LocationIcon width={20} />
        <span className='line__link'>
          {location ? location : 'Not Available'}
        </span>
      </div>
      <div className='data__line'>
        <WebsiteIcon />
        <a href={`https://${blog}`} className='line__link'>
          {blog ? blog : 'Not Available'}
        </a>
      </div>
      <div className='data__line'>
        <TwitterIcon />
        <a
          href={`https://twitter.com/${twitter_username}`}
          className='line__link'
        >
          {twitter_username ? twitter_username : 'Not Available'}
        </a>
      </div>
      <div className='data__line'>
        <CompanyIcon />
        <span className='line__link'>
          {company ? company : 'Not Available'}
        </span>
      </div>
    </section>
  );
}

export default UserData;
