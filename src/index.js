import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './context'
import App from './App';

ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <App/>
    </AppProvider>
  </StrictMode>,
  document.getElementById('root')
);

