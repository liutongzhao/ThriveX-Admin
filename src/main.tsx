import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import '@/styles/index.css';
import { loadRuntimeConfig } from './utils/config';
import { updateBaseURL } from './utils/request';

const app = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '');

loadRuntimeConfig().then(() => {
  updateBaseURL();
  app.render(
    <Router basename={basename}>
      <App />
    </Router>,
  );
});
