import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from './App';
import MainApp from './MainApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />);


