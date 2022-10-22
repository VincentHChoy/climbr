import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import RouteInfo from './components/RouteInfo/RouteInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home/> */}
    {/* <Search/> */}
    <RouteInfo/>
  </React.StrictMode>
);

