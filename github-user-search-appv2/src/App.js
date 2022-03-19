import { GithubProvider } from './context/GithubContext';
import Card from './components/layout/Card';

function App() {
  return (
    <GithubProvider>
      <Card />
    </GithubProvider>
  );
}

export default App;
