import locationIcon from '../../assets/icon-location.svg';
import websiteIcon from '../../assets/icon-website.svg';
import twitterIcon from '../../assets/icon-twitter.svg';
import companyIcon from '../../assets/icon-company.svg';

function UserData({ location, blog, twitter_username, company }) {
  // TODO icon color/transparency when no info is present

  return (
    <section className='user__data'>
      <div className='data__line'>
        <div>
          <img src={locationIcon} alt='location' className='line__icon' />
        </div>
        <span className='line__link'>
          {location ? location : 'Not Available'}
        </span>
      </div>
      <div className='data__line'>
        <div>
          <img src={websiteIcon} alt='website' className='line__icon' />
        </div>
        <a href={`https://${blog}`} className='line__link'>
          {blog ? blog : 'Not Available'}
        </a>
      </div>
      <div className='data__line'>
        <div>
          <img src={twitterIcon} alt='twitter' className='line__icon' />
        </div>
        <a
          href={`https://twitter.com/${twitter_username}`}
          className='line__link'
        >
          {twitter_username ? twitter_username : 'Not Available'}
        </a>
      </div>
      <div className='data__line'>
        <div>
          <img src={companyIcon} alt='company' className='line__icon' />
        </div>
        <span className='line__link'>
          {company ? company : 'Not Available'}
        </span>
      </div>
    </section>
  );
}

export default UserData;
