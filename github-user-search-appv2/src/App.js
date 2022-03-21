import { useContext } from 'react';

import GithubContext from './context/GithubContext';
import Header from './components/layout/Header';
import UserSearch from './components/layout/UserSearch';
import Card from './components/layout/Card';

function App() {
  const { theme, user, isLoading, dispatch } = useContext(GithubContext);

  return (
    <main data-theme={theme}>
      <Header theme={theme} dispatch={dispatch} />
      <UserSearch dispatch={dispatch} />
      <Card isLoading={isLoading} dispatch={dispatch} user={user} />
    </main>
  );
}

export default App;
