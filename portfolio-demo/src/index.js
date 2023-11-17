import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';

//✅ 1. Install and setup react router in index.js
//✅ 1a. Within `index.js`, import the `react-router-dom` library and wrap the `App` component with `BrowserRouter` 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);
