import { useState } from 'react';

import { getUser } from '../../context/GithubActions';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';

function UserSearch({ dispatch }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      // TODO improve this alert, needs to change input text to show error
      alert('Empty search string');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const user = await getUser(text);
      dispatch({ type: 'GET_USER', payload: user });
      setText('');
    }
  };

  return (
    <form className='user__search' onSubmit={handleSubmit}>
      <label htmlFor='input'>
        {/* TODO fix icon size on small screens */}
        <SearchIcon />
      </label>
      <input
        type='text'
        id='input'
        placeholder='Search GitHub username&#8230;'
        value={text}
        onChange={handleChange}
      />
      <button className='search__btn'>Search</button>
    </form>
  );
}

export default UserSearch;
