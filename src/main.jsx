//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
//include your index.scss file into the bundle
import './style/index.css';

//import your own components
import Layout from './layout.jsx';

//render your react application
// ReactDOM.render(<Layout />, document.querySelector('#app'));
createRoot(document.querySelector('#app')).render(<Layout />);
