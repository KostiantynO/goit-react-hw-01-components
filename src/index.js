import { React, ReactDOM, ThemeProvider } from './modules/common/components';
import './index.css';
import { App } from './Components/App';
import { theme } from './constants';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
