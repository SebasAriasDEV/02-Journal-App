import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { JournalApp } from './JournalApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <JournalApp />
    </React.StrictMode>
  </BrowserRouter>
);
