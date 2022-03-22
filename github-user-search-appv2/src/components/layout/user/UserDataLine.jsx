function UserDataLine({ data, children, link }) {
  return (
    <div className={`data__line ${!data ? 'data__line--inactive' : ''}`}>
      {children}
      {data ? (
        link ? (
          <a href={data} className='line__link'>
            {data}
          </a>
        ) : (
          <span className='line__link'>{data}</span>
        )
      ) : (
        <span>Not Available</span>
      )}
    </div>
  );
}

export default UserDataLine;
