import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM for React 18
import './index.css'; // Import your styles
import App from './App'; // Import App component

// Create the root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in React.StrictMode for development
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
