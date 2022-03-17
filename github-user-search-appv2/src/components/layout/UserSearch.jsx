import { useState } from 'react';

function UserSearch() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alert('Empty search string');
    } else {
      // TODO search users
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
