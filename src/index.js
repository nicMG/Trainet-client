import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProviderWrapper } from './context/app.context';
import { EditorProviderWrapper } from './context/editor.context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <EditorProviderWrapper>
        <UserProviderWrapper>
          <App />
        </UserProviderWrapper>
      </EditorProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
