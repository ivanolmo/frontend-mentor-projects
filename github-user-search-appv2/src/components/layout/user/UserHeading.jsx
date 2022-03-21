function UserHeading({ avatar, name, url, login, date }) {
  const dayjs = require('dayjs');
  let joinDate = dayjs(date).format('DD MMM YYYY');

  return (
    <div className='user__heading'>
      <img className='user__image' src={avatar} alt='github user' />
      <div className='user__subheading'>
        <h1 className='user__name'>{name}</h1>
        <h3 className='user__page'>
          <a href={url}>@{login}</a>
        </h3>
        <p className='user__joindate'>Joined {joinDate}</p>
      </div>
    </div>
  );
}

export default UserHeading;
