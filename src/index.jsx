import { createRoot } from 'react-dom/client';
import App from './App.jsx';
 
import './index.css';
 
const container = document.querySelector('#app');
const root = createRoot(container);
 
root.render(<App />);