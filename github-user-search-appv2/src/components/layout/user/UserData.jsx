import UserDataLine from './UserDataLine';
import { ReactComponent as LocationIcon } from '../../assets/icon-location.svg';
import { ReactComponent as WebsiteIcon } from '../../assets/icon-website.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg';
import { ReactComponent as CompanyIcon } from '../../assets/icon-company.svg';

function UserData({ location, blog, twitter_username, company }) {
  return (
    <section className='user__data'>
      <UserDataLine data={location}>
        <LocationIcon />
      </UserDataLine>
      <UserDataLine data={blog}>
        <WebsiteIcon />
      </UserDataLine>
      <UserDataLine data={twitter_username}>
        <TwitterIcon />
      </UserDataLine>
      <UserDataLine data={company}>
        <CompanyIcon />
      </UserDataLine>
    </section>
  );
}

export default UserData;
