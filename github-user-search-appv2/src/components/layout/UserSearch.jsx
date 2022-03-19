import { useState, useContext } from 'react';
import GithubContext from '../../context/GithubContext';
import { getUser } from '../../context/GithubActions';

function UserSearch() {
  const { dispatch } = useContext(GithubContext);
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
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search GitHub username...'
          value={text}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </section>
  );
}

export default UserSearch;
