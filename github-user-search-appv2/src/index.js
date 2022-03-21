import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GithubProvider } from './context/GithubContext';
import './reset.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <App />
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
