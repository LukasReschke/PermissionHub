import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createClient, Provider } from 'urql';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = createClient({
  url: 'http://localhost:3001/graphql',
});


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider value={client}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
