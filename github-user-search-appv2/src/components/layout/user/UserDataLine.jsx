function UserDataLine({ data, children }) {
  return (
    <div className={`data__line ${!data ? 'data__line--inactive' : ''}`}>
      {children}
      {<span className='line__link'>{data ? data : 'Not Available'}</span>}
    </div>
  );
}

export default UserDataLine;
