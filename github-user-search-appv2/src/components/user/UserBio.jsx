function UserBio({ bio }) {
  return !bio ? (
    <p className='user__bio user__bio--inactive'>This profile has no bio</p>
  ) : (
    <section className='user__bio'>
      <p>{bio}</p>
    </section>
  );
}

export default UserBio;
