import { useState } from 'react';

import { getUser } from '../../context/GithubActions';
import searchIcon from '../assets/icon-search.svg';

function UserSearch({ dispatch }) {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if (error) {
      setError(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'SET_LOADING' });
      const user = await getUser(text);
      dispatch({ type: 'GET_USER', payload: user });
      setText('');
    } catch (error) {
      setError(true);
      dispatch({ type: 'END_LOADING' });
    }
  };

  return (
    <form className='user__search' onSubmit={handleSubmit}>
      <label htmlFor='input'>
        <img src={searchIcon} alt='search' className='search__icon' />
      </label>
      <div className='input__container'>
        <input
          type='text'
          id='input'
          placeholder='Search GitHub username&#8230;'
          value={text}
          onChange={handleChange}
        />
      </div>
      {error ? <span className='search__error'>No results</span> : ''}
      <button
        disabled={text ? false : true}
        className={`search__btn ${!text ? 'search__btn--disabled' : ''}`}
      >
        Search
      </button>
    </form>
  );
}

export default UserSearch;
