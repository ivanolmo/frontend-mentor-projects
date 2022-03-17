import { useState } from 'react';
import { getUser } from '../../api/getUser';

function UserSearch() {
  const [text, setText] = useState('');
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      // TODO improve this alert, needs to change input text to show error
      alert('Empty search string');
    } else {
      const userInfo = await getUser(text);
      setText('');
      setUser(userInfo);
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
